const pool = require('../database/dbConnect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (username, password) => {
        try {
          const userQuery = 'SELECT * FROM users WHERE username = $1';
          const userResult = await pool.query(userQuery, [username]);
      
          if (userResult.rows.length > 0) {
            throw new Error('User already exists');
          }
      
          const hashedPassword = await bcrypt.hash(password, 10);
      
          const insertQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
          await pool.query(insertQuery, [username, hashedPassword]);
          return { success: true };
        } catch (err) {
          return { success: false, message: err.message };
        }      
};

async function authenticateUser(username, password) {
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  
      if (rows.length === 0) {
        return { success: false, message: 'Username not found' };
      }
  
      const user = rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return { success: false, message: 'Invalid password' };
      }
  
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { success: true, message: 'Authenticated', token };

    } catch (error) {
      console.error(error);
      return { success: false, message: 'Authentication failed' };
    }
  }

module.exports = {
    registerUser,
    authenticateUser,
  };
  



