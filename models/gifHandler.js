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
function removeGif(jsonArray,cb){
    let query = {$or:[]}
    let queryArray = [];
    jsonArray.forEach(function(item){
        queryArray.push({name:item});
    })
    query.$or = queryArray
    GifModel.deleteMany(query)
    .then(cb)
    .catch(function(error){
        console.log("error",error)
    })
}
module.exports = {
    getAllGifs : getAllGifs,
    insertGif: insertGif,
    removeGif: removeGif
}