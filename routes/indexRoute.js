const express = require('express');
const router = express.Router();
const gifHandler = require('../models/gifHandler.js')

router.get('/', function (req, res) {
  gifHandler.getAllGifs(function (gifs){
  res.render("index", { gifs: gifs });
  })
});

module.exports = router;