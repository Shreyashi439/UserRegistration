# User Registration & Validation API

## Overview

A simple full-stack project where users can register through a form.  
The backend validates input, hashes the password, and stores user data in a **MySQL database**.

---

## File Structure

UserRegistration/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── package.json
│
└── README.md

---

## How to Run

### **Setup MySQL**

```sql
CREATE DATABASE user_registration_db;


#### Run Backend ####
cd backend
npm install
npm start

Server will run on http://localhost:5000

#### Run Frontend ###

Open frontend/index.html in your browser.

Features

User registration form

Validations (email, password, phone)

Password hashing using bcrypt

Data stored in MySQL database

## Features ##

User registration form

Validations (email, password, phone)

Password hashing using bcrypt

Data stored in MySQL database

🧰 Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MySQL

Libraries: bcryptjs, cors, mysql2

Note:
1. Make sure MySQL is running and the database is created and also replaced the password at db.js
2. Start the backend (`npm start`).
3. Open the frontend `index.html` in your browser.
4. Test registration functionality.


```

