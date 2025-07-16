from flask import Flask, request, jsonify
from model import add_sweet

app = Flask(__name__)

@app.route('/sweets', methods=['POST'])
def add_sweet_api():
    return jsonify({"error": "Not implemented"}), 501

if __name__ == '__main__':
    app.run(debug=True)