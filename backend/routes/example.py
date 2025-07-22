from flask import Blueprint, jsonify

example_bp = Blueprint('example', __name__, url_prefix='/example')

@example_bp.route('/', methods=['GET'])
def example_route():
    return jsonify({"message": "Hello from example route!"})
