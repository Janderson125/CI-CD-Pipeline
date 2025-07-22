from flask import Flask
from routes.mechanics import mechanics_bp

app = Flask(__name__)
app.register_blueprint(mechanics_bp, url_prefix="/api/mechanics")

@app.route("/")
def index():
    return {"message": "Welcome to the Mechanic API"}

if __name__ == "__main__":
    app.run(debug=True)
