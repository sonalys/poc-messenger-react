import time
from flask import request

from api_server.access_control import BasicAccessControl
from .common import json_result, create_blueprint, abort_error

messages = list()


def create_ui_bp():
    access = BasicAccessControl()

    bp = create_blueprint(__name__, 'ui')

    @bp.route('/name', methods=['GET'])
    @json_result
    @access.logged_in_only
    def me():
        return access.user_name()

    @bp.route('/login', methods=['POST'])
    @json_result
    def perform_login():
        data = request.get_json(force=True, silent=True)
        if not data:
            return abort_error('Invalid login data', 401)
        username = data.get('username')
        password = data.get('password')
        if not username or not password or not access.log_in(username, password):
            return abort_error('Invalid username or password', 401)
        return ''

    @bp.route('/logout', methods=['GET'])
    @json_result
    def perform_logout():
        access.log_out()
        return

    @bp.route('/messages', methods=['POST'])
    @json_result
    @access.logged_in_only
    def post_message():
        data = request.get_json(force=True, silent=True)

        if not data:
            return abort_error('Invalid request data', 401)

        message = data.get('message')
        messages.append({'sender': access.user_name(),
                        'message': message, 'created_at': time.time() * 1000})
        return

    @bp.route('/messages/<int:since>', methods=['GET'])
    @json_result
    @access.logged_in_only
    def list_messages(since):
        return [msg for msg in messages if msg['created_at'] > since]

    @bp.route('/messages', methods=['delete'])
    @json_result
    @access.logged_in_only
    def delete_messages():
        data = request.get_json(force=True, silent=True)
        if not data:
            return abort_error('Invalid request data', 401)

        try:
            index = int(data.get('index'))
        except:
            return abort_error('Index is not valid', 401)

        try:
            msg = messages[index]

            if msg['sender'] != access.user_name():
                return abort_error('You can only delete your own messages', 500)

            messages.pop(index)
        except IndexError:
            return abort_error('Invalid index range', 401)

        return

    return bp
