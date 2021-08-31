from uuid import uuid4

from .utils import ApiTestCase, api_url


class Login(ApiTestCase):
    resp_invalid_user_pass = {
        'success': False,
        'error': 'Invalid username or password',
        'status': 401
    }
    rest_invalid_login_data = {
        'success': False,
        'error': 'Invalid login data',
        'status': 401
    }

    def all_endpoints_401(self):
        get_endpoints = ['/ui/messages', '/ui/name']
        post_endpoints = ['/ui/messages']

        for endpoint in get_endpoints:
            status, res, headers = self.app.get(api_url(endpoint))
            self.assertEqual(status, 401)

        for endpoint in post_endpoints:
            status, res, headers = self.app.post(api_url(endpoint), data='')
            self.assertEqual(status, 401)

    def test_protected_endpoints(self):
        self.all_endpoints_401()

    def test_login_empty_payload(self):
        status, res, headers = self.app.post(api_url('ui/login'), data={})
        self.assertEqual(status, 401)
        self.assertDictEqual(res, self.rest_invalid_login_data)
        self.all_endpoints_401()

    def test_wrong_password(self):
        payload = {'username': '', 'password': ''}
        status, res, headers = self.app.post(api_url('ui/login'), data=payload)
        self.assertEqual(status, 401)
        self.assertDictEqual(res, self.resp_invalid_user_pass)
        self.all_endpoints_401()

    def test_right_password(self):
        payload = {'username': 'myself', 'password': 'hipster'}
        status, res, headers = self.app.post(api_url('ui/login'), data=payload)
        self.assertEqual(status, 200)
        status, res, headers = self.app.get(api_url('ui/name'))
        self.assertEqual(status, 200)
        self.assertEqual(res, 'myself')

    def test_logout(self):
        payload = {'username': 'someone', 'password': 'hipster'}
        status, res, headers = self.app.post(api_url('ui/login'), data=payload)
        self.assertEqual(status, 200)
        self.app.get(api_url('ui/logout'))
        self.all_endpoints_401()


class Messages(ApiTestCase):
    def test_add_message(self):
        uuid = uuid4().hex
        message = 'Luke, I am your father...{}'.format(uuid)
        payload = {'sender': 'Darth Vader', 'message': message}
        status, res, headers = self.app.post(api_url('ui/messages'), data=payload)
        self.assertEqual(status, 200)
