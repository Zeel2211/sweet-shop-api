from flask import Flask, request, jsonify
from model import add_sweet,get_sweets,delete_sweet,update_sweet

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
    
@app.route('/sweets', methods=['GET'])
def get_sweet_api():
    try:
        name = request.args.get("name")
        category = request.args.get("category")
        sort_by = request.args.get("sort_by")
        order = request.args.get("order", "asc")

        sweets = get_sweets(name, category, sort_by, order)
        sweet_list = [{
            "id": row[0],
            "name": row[1],
            "category": row[2],
            "price": row[3],
            "quantity": row[4]
        } for row in sweets]

        return jsonify(sweet_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


                
@app.route('/sweets/<int:sweet_id>',methods=['DELETE'])
def delete_sweet_api(sweet_id):
    try:
        deleted_rows = delete_sweet(sweet_id)
        if deleted_rows == 0:
            return jsonify({"error":"sweet not found"}),400
        return jsonify({"message":"sweet deleted"}),200
    except Exception as err:
        return jsonify({"error":str(err)}),500

@app.route('/sweets/<int:sweet_id>',methods=['PUT'])
def update_sweet_api(sweet_id):
    data = request.json
    if not all(k in data for k in ('name','category','price','quantity')):
        return jsonify({"error":"Data Missing"}),400
    try:
        updated_sweet = update_sweet(
            sweet_id=sweet_id,
            name=data["name"],
            category=data["category"],
            price=data["price"],
            quantity=data["quantity"]
        )
        if updated_sweet == 0:
            return jsonify({"error":"sweet not found"}),404
        return jsonify({"message":"sweet updated"}),200
    except Exception as err:
        return jsonify({"error":str(err)}),500

if __name__ == '__main__':
    app.run(debug=True)