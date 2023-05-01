const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');
const { authenticateUser } = require('../controllers/authController');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  const result = await registerUser(username, password);

  if (result.success) {
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } else {
    res.status(400).json({ success: false, message: result.message });
  }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
  
    const result = await authenticateUser(username, password);
  
    if (result.success) {
      res.status(200).json({ success: true, message: 'Authenticated', token: result.token });
    } else {
      res.status(401).json({ success: false, message: result.message });
    }
  });

module.exports = router;




