const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

//PG database setup
const { Pool } = require('pg');

const db = new Pool( {
    host: 'localhost',
    port: 5432,
    user: 'denda',
    password: 'gunga',
    database: 'fightGT'
});

db.connect()
    .then(res => console.log('database connected'))
    .catch(err => console.log(err));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

app.get("/login", (req, res) => {
    const userEmail = req.query.userEmail;
    db.query(`
    SELECT * FROM users
    WHERE email = $1;
    `,[userEmail])
    .then(data => {
      if(data.rows[0].password === req.query.password) {
        return true;
      } else {
        return false;
      }
    }) 
})
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });