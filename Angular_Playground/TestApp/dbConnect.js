const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'JezzDB',
  password: 'PostgressDB1',
  port: 5432, 
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = pool;
