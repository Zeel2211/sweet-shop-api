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

# SweetshopFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
