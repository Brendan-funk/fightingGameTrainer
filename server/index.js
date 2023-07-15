const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//PG database setup
const { Pool } = require('pg');

const dbParams = {
    host: 'localhost',
    port: 5432,
    user: 'denda',
    password: 'gunga',
    database: 'fightGT'
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
db.connect()
    .then(res => console.log('database connected'))
    .catch(err => console.log(err));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });