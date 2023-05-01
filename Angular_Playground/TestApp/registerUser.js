const express = require('express');
const bcrypt = require('bcryptjs');
const dbConnection = require('dbConnect');

const registerUser = async (username, password) => {
    try {
      const userQuery = 'SELECT * FROM users WHERE username = $1';
      const userResult = await dbConnection.query(userQuery, [username]);
  
      if (userResult.rows.length > 0) {
        throw new Error('User already exists');
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const insertQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
      await dbConnection.query(insertQuery, [username, hashedPassword]);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };
  