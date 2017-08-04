const express = require('express');
const router = express.Router();
const gifHandler = require('../models/gifHandler.js')

router.get('/gifCollection', function (req, res) {
  gifHandler.getAllGifs(function (gifs){
  res.render("gifCollection", { gifs: gifs });
  })
});

router.get('/form', function(req, res, next){
    res.render("gifInsert")
})
router.post('/insert', function(req, res, next){
  req.body.tags = req.body.tags.split(" ")
  console.log(req.body)
  gifHandler.insertGif(req.body,function(){
    res.redirect("gifCollection")
  })
})
router.get("/remove", function(req,res,next){
  gifHandler.getAllGifs(function (gifs){
  res.render("removeGif", { gifs: gifs });
  })
})
router.post("/delete", function(req,res,next){
  if( typeof req.body.name === 'string' ) {
    req.body.name = [ req.body.name ];
}
  gifHandler.removeGif(req.body.name, function(result){
    console.log(result)
    res.redirect("remove")
  })
  
})
module.exports = router;