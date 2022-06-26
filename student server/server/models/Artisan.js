const mongoose = require('mongoose');

const ArtisanShema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    }
})

module.exports = mongoose.model('Artisan', ArtisanShema);

