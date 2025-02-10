from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows your React app to make requests to this API

@app.route('/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello from Python!"})

if __name__ == '__main__':
    app.run(port=5000)