# 🍬 Sweet Shop Management System (Flask + PostgreSQL)

A simple RESTful API backend for managing a sweet shop, built using **Flask**, **psycopg2**, and tested using **unittest** with the **TDD (Test-Driven Development)** approach.

---

## 🚀 Features

- ➕ Add new sweets  
- 📄 View all sweets  
- 🗑️ Delete sweets  
- 📝 Update sweets  
- 🔍 Search sweets by name or category  
- 🔃 Sort sweets by price, name, or quantity (asc/desc)  
- 🛒 Purchase sweets (reduce quantity)  
- ♻️ Restock sweets (increase quantity)  

---

## 🧪 Test Coverage

- ✅ All features are tested using `unittest`  
- ✅ 90%+ test coverage  
- 📊 View test report at: `/htmlcov/index.html`  

---

## 🛠 Tech Stack

| Layer       | Tech            |
|-------------|-----------------|
| Backend     | Python (Flask)  |
| Database    | PostgreSQL      |
| ORM         | psycopg2        |
| Testing     | unittest, coverage.py |

---

## 📦 Installation & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/Zeel2211/sweet-shop-api/
cd sweet-shop-api 
```
### 2.Setup Virtual Environment 
```bash
python3 -m venv .venv
source .venv/bin/activate
```
### 3. Install Required Packages
```bash
pip install -r requirements.txt
```

### 4. Configure PostgreSQL
```bash
CREATE DATABASE sweets;

CREATE TABLE sweets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(100),
  price INTEGER,
  quantity INTEGER
);
```
## Running The App
```bash
python app.py
```
**Visit:**  
📍 [http://localhost:5000/sweets](http://localhost:5000/sweets)

## 🧪 Running Tests

```bash
python test_sweet_shop/test_sweetshop.py
```

## 📊 Test Coverage Report

```bash
coverage run test_sweet_shop/test_sweetshop.py
coverage html
xdg-open htmlcov/index.html
```

## 🔗 API Endpoints

| Method | Endpoint                    | Description                         |
|--------|-----------------------------|-------------------------------------|
| POST   | `/sweets`                   | Add a new sweet                     |
| GET    | `/sweets`                   | View/Search/Sort sweets             |
| PUT    | `/sweets/<id>`              | Update sweet by ID                  |
| DELETE | `/sweets/<id>`              | Delete sweet by ID                  |
| POST   | `/sweets/<id>/purchase`     | Purchase sweets (reduce quantity)   |
| POST   | `/sweets/<id>/restock`      | Restock sweets (increase quantity)  |
