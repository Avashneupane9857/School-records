// backend/index.js

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3005;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Saibaba9857@",
  database: "school_records",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Routes
app.get("/students", (req, res) => {
  db.query("SELECT * FROM Students", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/students", (req, res) => {
  const { name, date_of_birth, grade, address } = req.body;
  db.query(
    "INSERT INTO Students (name, date_of_birth, grade, address) VALUES (?, ?, ?, ?)",
    [name, date_of_birth, grade, address],
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
