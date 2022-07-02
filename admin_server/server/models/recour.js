const mongoose = require('mongoose');

const RecourShema = new mongoose.Schema({
    name: { type: String },
    module: { type: String },
    matricule: { type: String },
    problem: { type: String },
    type: { type: String },
    Date: { type: String },
    assets_details: { type: String },
    email: { type: String }
})

module.exports = mongoose.model('recour', RecourShema);