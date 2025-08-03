
const express_auth = require('express');
const router_auth = express_auth.Router();
const { signup, login, getMe } = require('../controllers/auth.controller');
const { protect } = require('../middleware/checkAuth');

router_auth.post('/signup', signup);
router_auth.post('/login', login);
router_auth.get('/me', protect, getMe);

module.exports = router_auth;

