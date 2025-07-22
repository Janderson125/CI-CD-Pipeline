from flask import Blueprint, jsonify

mechanics_bp = Blueprint("mechanics", __name__)

@mechanics_bp.route("/", methods=["GET"])
def get_mechanics():
    return jsonify([
        {"id": 1, "name": "Alex Johnson", "specialty": "Engine Repair"},
        {"id": 2, "name": "Maria Gomez", "specialty": "Transmission"}
    ])
