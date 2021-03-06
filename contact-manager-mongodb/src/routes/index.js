const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const contactRoutes = require('./contacts');

router.use(authRoutes);
router.use(contactRoutes);

module.exports = router;