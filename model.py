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

def get_sweets():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM sweets;")
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