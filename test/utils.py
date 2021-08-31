import json
import unittest

from flask.testing import FlaskClient

from api_server.api import create_app


class TestClient(FlaskClient):
    config = {}

    def get(self, *args, **kw):
        res = super(TestClient, self).get(*args, **kw)
        return res.status_code, res.json, res.headers

    def post(self, url, data, headers=None, no_json=False):
        if isinstance(data, dict) and not no_json:
            res = super(TestClient, self).post(
                url,
                data=json.dumps(data),
                content_type='application/json',
                headers=headers
            )
            return res.status_code, res.json, res.headers
        res = super(TestClient, self).post(
            url,
            data=data,
            headers=headers
        )
        return res.status_code, res.data.decode('utf-8'), res.headers


def create_suite_app():
    app = create_app()
    app.testing = True
    app.test_client_class = TestClient
    return app.test_client()


def api_url(url):
    return f'/api/{url.strip("/")}'


class ApiTestCase(unittest.TestCase):

    def setUp(self):
        super(ApiTestCase, self).setUp()
        self.app = create_suite_app()

    def tearDown(self):
        super(ApiTestCase, self).tearDown()

    def assertError(self, response, status, msg=None):
        status_res, json_res, headers = response
        self.assertFalse(json_res['success'])
        self.assertEqual(status, status_res)
        self.assertEqual(status, json_res['status'])
        if msg is not None:
            self.assertEqual(json_res['error'], msg)

    def assertKeysEqual(self, obj: dict, keys: list):
        self.assertListEqual(sorted(list(obj.keys())), sorted(keys))
