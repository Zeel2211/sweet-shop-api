from flask import Flask, request, jsonify
from model import add_sweet

app = Flask(__name__)

@app.route('/sweets', methods=['POST'])
def add_sweet_api():
    data = request.json
    if not all(k in data for k in ('name','category','price','quantity')):
        return jsonify({"error":"Data is Missing"}),400
    try:
        sweet_id = add_sweet(
            data["name"],
            data["category"],
            data["price"],
            data["quantity"]
        )
        return jsonify({"message":"Sweet added","id":sweet_id}),201
    except Exception as e:
        return jsonify({"error": str(e)}),500

if __name__ == '__main__':
    app.run(debug=True)