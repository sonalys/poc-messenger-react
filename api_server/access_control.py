import json
from functools import wraps

from flask import Response, session


class BasicAccessControl(object):
    default_login_response = Response(json.dumps({'error': 'must_login'}), 401)

    def __init__(self):
        self.sess_key = 'user'

    def user_name(self):
        if not self._is_logged_in():
            return None
        return session[self.sess_key]['name']

    def log_in(self, username, password):
        if password != 'hipster' or not username:
            return False
        session[self.sess_key] = {'name': username}
        return True

    def log_out(self):
        session[self.sess_key] = None
        session.clear()

    def _is_logged_in(self):
        return isinstance(session.get(self.sess_key), dict) and 'name' in session[self.sess_key]

    def logged_in_only(self, f):
        @wraps(f)
        def decorated(*args, **kwargs):
            if not self._is_logged_in():
                return self.default_login_response
            return f(*args, **kwargs)

        return decorated
