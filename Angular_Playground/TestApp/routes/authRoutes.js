const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

router.post('/register', async (req, res) => {
  //... the code from the previous example for the /api/register endpoint
});

module.exports = router;
