const GifModel = require('./gifModel.js')

function getAllGifs(callback){
    GifModel.find({})
    .then(callback)
    .catch(function(error){
        console.log("There was an error", error)
        callback(null)
    })
}
function insertGif(json,cb){
  const gif = new GifModel(json)
  gif.save()
  .then(cb)
  .catch(function(error){
    console.log("There was an error",error)
  })
}

module.exports = {
    getAllGifs : getAllGifs,
    insertGif: insertGif
}