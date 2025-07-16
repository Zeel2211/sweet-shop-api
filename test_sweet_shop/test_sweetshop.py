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

if __name__ == '__main__':
    unittest.main()
