from os import name
import psycopg2
def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="sweets",
        user="zeel",
        password=2121
    )
    
def add_sweet(name, category, price, quantity):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO sweets (name, category, price, quantity)
        VALUES (%s, %s, %s, %s) RETURNING id;
    """, (name, category, price, quantity))
    sweet_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return sweet_id

def get_sweets(name=None, category=None, sort_by=None, order='asc'):
    conn = get_connection()
    cur = conn.cursor()

    query = "SELECT * FROM sweets"
    params = []
    conditions = []

    if name:
        conditions.append("name ILIKE %s")
        params.append(f"%{name}%")
    if category:
        conditions.append("category ILIKE %s")
        params.append(f"%{category}%")

    if conditions:
        query += " WHERE " + " AND ".join(conditions)

    allowed_sort_fields = ['price', 'quantity', 'name']
    if sort_by in allowed_sort_fields:
        sort_order = 'DESC' if order == 'desc' else 'ASC'
        query += f" ORDER BY {sort_by} {sort_order}"

    cur.execute(query, tuple(params))
    sweets = cur.fetchall()
    cur.close()
    conn.close()
    return sweets



def delete_sweet(sweet_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM sweets WHERE id = %s;",(sweet_id,))
    deleted_row = cur.rowcount
    conn.commit()
    cur.close()
    conn.close()
    return deleted_row

def update_sweet(sweet_id,name,category,price,quantity):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE sweets SET name=%s, category=%s,price=%s, quantity=%s WHERE id =%s",(name,category,price,quantity,sweet_id))
    updated_row = cur.rowcount
    conn.commit()
    cur.close()
    conn.close()
    return updated_row

def purchase_sweet(sweet_id, quantity):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT quantity FROM sweets WHERE id = %s", (sweet_id,))
    result = cur.fetchone()

    if not result:
        cur.close()
        conn.close()
        return {"error": "Sweet not found"}, 404

    current_quantity = result[0]
    if current_quantity < quantity:
        cur.close()
        conn.close()
        return {"error": "Insufficient stock"}, 400

    cur.execute(
        "UPDATE sweets SET quantity = quantity - %s WHERE id = %s",
        (quantity, sweet_id)
    )
    conn.commit()
    cur.close()
    conn.close()
    return {"message": "purchase successful"}, 200
