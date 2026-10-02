const express = require('express');
const router = express.Router();
// Controller se registerUser aur loginUser dono import karein
const { registerUser, loginUser } = require('../controllers/authController');

// POST route for Registration
router.post('/register', registerUser);

// POST route for Login (MISSING THA)
router.post('/login', loginUser);

module.exports = router;