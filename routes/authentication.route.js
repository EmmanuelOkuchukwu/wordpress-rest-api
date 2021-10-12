const { authenticate } = require('../controller/authentication');
const express = require('express');
const router = express.Router();

router.post('/auth/user/auth', authenticate);

module.exports = router;