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
// function removeGif(jsonArray,cb){
//     let query = {$or:[]}
//     query.queryArray = []
//     jsonArray.forEach(item){
//         queryArray.push({name:item});
//     }
//     console.log(queryArray)
//     console.log("{ $or:" + queryArray + "}")
// }
module.exports = {
    getAllGifs : getAllGifs,
    insertGif: insertGif
}