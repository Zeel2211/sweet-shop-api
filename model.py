import psycopg2
def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="sweets",
        user="zeel",
        password="2121"
    )
    
def add_sweet(name, category, price, quantity):
    raise NotImplementedError("Add sweet not implemented yet")