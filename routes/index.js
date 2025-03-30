const express = require('express');
const homeRoutes = require('./home');
const router = express.Router();

router.use('/', homeRoutes);

module.exports = router;
