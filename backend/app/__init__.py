from flask import Flask
from flask_cors import CORS

# Import blueprints
from backend.routes.example import example_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register Blueprints
    app.register_blueprint(example_bp)

    return app
