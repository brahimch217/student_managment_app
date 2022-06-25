
const mongoose = require('mongoose');

const NoteShema = new mongoose.Schema({
    name: {
        type: String
    },
    module: {
        type: String
    },
    numéro: {
        type: String
    },
    td: {
        type: String
    },
    tp: {
        type: String
    },
    examen: {
        type: String
    },
    Department: {
        type: String
    },
    semestre: {
        type: String
    },
    Date: {
        type: String
    },
    Note: {
        type: String
    },
    Status: {
        type: String
    },
    assets_details: {
        type: String
    }
})

module.exports = mongoose.model('Notes', NoteShema);