import unittest
import json
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app
import model

class TestSweetShop(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()

    def test_db_connection(self):
        try:
            conn = model.get_connection()
            self.assertIsNotNone(conn)
            conn.close()
        except Exception as e:
            self.fail(f"Database connection failed: {e}")

    def test_add_sweet(self):
        data = {
            "name": "Gulab Jamun",
            "category": "Milk-Based",
            "price": 20,
            "quantity": 50
        }
        response = self.client.post('/sweets', data=json.dumps(data),
                                    content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertIn("Sweet added", response.get_data(as_text=True))
        
    def test_get_sweets(self):
        response = self.client.get("/sweets")
        self.assertEqual(response.status_code , 200)
        sweets = response.get_json()
        self.assertEqual(sweets,list)
        
if __name__ == '__main__':
    unittest.main()
