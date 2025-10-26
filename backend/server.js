import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import db from "./db.js";

const app = express();
app.use(express.json());
app.use(cors());

// Create table if not exists
db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    phone VARCHAR(15)
  )
`);

// Registration endpoint
app.post("/register", (req, res) => {
  const { name, email, password, phone } = req.body;

  // Validate fields
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters." });
  }
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ message: "Phone number must be 10 digits." });
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Store user
  const sql = "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, hashedPassword, phone], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Email already registered." });
      }
      return res.status(500).json({ message: "Database error." });
    }
    res.status(200).json({ message: "User registered successfully!" });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
