import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "SH@#1345",        // your MySQL password
  database: "user_registration_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

export default db;
