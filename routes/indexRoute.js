const express = require('express');
const router = express.Router();
const gifHandler = require('../models/gifHandler.js')

router.get('/', function (req, res) {
  res.redirect('gif')
});

module.exports = router;