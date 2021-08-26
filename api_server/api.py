import os

from flask import Flask
from flask_cors import CORS

from .ui import create_ui_bp


def create_app():
    """ Create a Flask app and registers blueprints """
    blueprints = [
        create_ui_bp()
    ]
    app = Flask(__name__)
    app.secret_key = os.urandom(256)
    CORS(app)
    for bp in blueprints:
        app.register_blueprint(bp)
    return app
