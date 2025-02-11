from flask import Flask, send_file
import os

app = Flask(__name__)

@app.route('/')
def serve_react():
    # Serve the main React app
    return send_file('../dist/index.html')

@app.route('/api/hello')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)