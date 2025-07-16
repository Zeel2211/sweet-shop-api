from flask import Flask, request, jsonify
from model import get_connection

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)
