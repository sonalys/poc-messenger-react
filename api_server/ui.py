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
        return ''

    @bp.route('/messages', methods=['POST'])
    @json_result
    @access.logged_in_only
    def post_message():
        data = request.get_json(force=True, silent=True)
        message = data.get('message')
        sender = data.get('sender')
        messages.append({'sender': sender, 'message': message})
        return messages

    @bp.route('/messages', methods=['GET'])
    @json_result
    @access.logged_in_only
    def list_messages():
        return messages

    return bp
