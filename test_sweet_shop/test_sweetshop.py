import unittest
import json
import sys
import os
from urllib import response

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
        response = self.client.post('/sweets', data=json.dumps(data),content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertIn("Sweet added", response.get_data(as_text=True))
        
    def test_get_sweets(self):
        response = self.client.get("/sweets")
        self.assertEqual(response.status_code , 200)
        sweets = response.get_json()
        self.assertIsInstance(sweets,list)
        
    def test_delete_sweet(self):
        data = {
            "name":"test sweet",
            "category":"test category",
            "price":10,
            "quantity":12
        }
        post_response = self.client.post('/sweets',data=json.dumps(data), content_type='application/json')
        sweet_id = post_response.get_json()["id"]
        delete_response = self.client.delete(f"/sweets/{sweet_id}")
        self.assertEqual(delete_response.status_code,200)
        self.assertIn("sweet deleted",delete_response.get_data(as_text=True))
    
    def test_update_sweet(self):
        data = {
            "name":"test sweet",
            "category":"test category",
            "price":10,
            "quantity":12
        }
        post_response = self.client.post('/sweets',data=json.dumps(data),content_type='application/json')
        sweet_id=post_response.get_json()["id"]

        updated_data={
            "name":"updated sweet",
            "category":"updated category",
            "price":30,
            "quantity":5
        }
        update_response = self.client.put(f'/sweets/{sweet_id}',data=json.dumps(updated_data),content_type='application/json')
        self.assertEqual(update_response.status_code,200)
        self.assertIn("sweet updated",update_response.get_data(as_text=True))

    def test_search_sweet(self):
        self.client.post('/sweets',json={
            "name":"Barfi",
            "category":"Milk-Based",
            "price":15,
            "quantity":10
        })
        response = self.client.get('/sweets?name=Barfi')
        self.assertEqual(response.status_code,200)
        sweets = response.get_json()
        self.assertTrue(any(sweet['name']=="Barfi" for sweet in sweets))

    def test_sort_sweets_by_price(self):
        self.client.post('/sweets',json={
            "name":"sweet a",
            "category":"test",
            "price":50,
            "quantity":10
        })
        self.client.post('/sweets',json={
            "name":"sweet b",
            "category":"test",
            "price":30,
            "quantity":10
        })

        response=self.client.get('/sweets?sort_by=price&order=asc')
        self.assertEqual(response.status_code,200)
        data=response.get_json()
        self.assertGreaterEqual(data[1]['price'],data[0]['price'])


    def test_purchase_sweet(self):
        test_sweet = self.client.post('/sweets',json={
            "name":"ladoo",
            "category":"Desi",
            "price":"50",
            "quantity":30
        })
        sweet_id=test_sweet.get_json()['id']
        purchase_detail = self.client.post(f"/sweets/{sweet_id}/purchase",json={
            "quantity":15
        })
        self.assertEqual(purchase_detail.status_code,200)
        self.assertIn("purchase successful",purchase_detail.get_data(as_text=True))

    def test_restock_sweet(self):
        test_sweet = self.client.post("/sweets",json={
            "name":"ladoo",
            "category":"Desi",
            "price":"50",
            "quantity":5
        })
        sweet_id = test_sweet.get_json()['id']
        restock_detail = self.client.post(f"/sweets/{sweet_id}/restock",json={
            "quantity": 10
        })
        self.assertEqual(restock_detail.status_code,200)
        self.assertIn("restocked successful",restock_detail.get_data(as_text=True))

if __name__ == '__main__':
    unittest.main()