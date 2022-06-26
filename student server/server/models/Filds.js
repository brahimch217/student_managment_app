const mongoose = require('mongoose');

const FildsShema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    }
})

module.exports = mongoose.model('filds', FildsShema);
