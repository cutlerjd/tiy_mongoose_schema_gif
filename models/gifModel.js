const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/gifbin');

const gifSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    url: {type: String},
    nsfw: {type: Boolean, required: true, default: true},
    file: {
        size: { type: Number},
        type: { type: String, enum: ['gif','sprite','html5'] },
        length: { type: String }
    },
    tags: [String],
    source: {type: String}
})

const GifModel = mongoose.model('GifModel', gifSchema);

module.exports = GifModel;


