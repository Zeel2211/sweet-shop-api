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