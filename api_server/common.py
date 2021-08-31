import datetime
import json
from functools import wraps

from flask import abort, Response, Blueprint


def create_blueprint(import_name, name):
    return Blueprint(name, import_name, url_prefix=f'/api/{name}')


def abort_error(message, status=400):
    abort(Response(json.dumps({
        'success': False,
        'error': message,
        'status': status
    }), status=status,
        mimetype='application/json'))


def json_result(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        res = func(*args, **kwargs)
        if isinstance(res, Response):
            return res
        str_res = json.dumps(res, cls=JSONEncoder)
        return Response(str_res, mimetype='application/json')

    return decorated


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, bytes):
            return o.decode('utf-8')
        if isinstance(o, datetime.datetime):
            return o.timestamp()
        if hasattr(o, 'to_dict'):
            return o.to_dict()
        return json.JSONEncoder.default(self, o)
