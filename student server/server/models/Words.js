const mongoose = require('mongoose');

const WordsShema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    word: {
        type: String
    }
})

module.exports = mongoose.model('Words', WordsShema);