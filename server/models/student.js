
const mongoose = require('mongoose');

const StudentShema = new mongoose.Schema({
    Nom: {
        type: String
    },
    Prénom: {
        type: String
    },
    Email: {
        type: String
    },
    Registration_Date: {
        type: String
    },
    numéro_inscription: {
        type: String
    },
    Classer: {
        type: String
    },
    Gener: {
        type: String
    },
    Numéro_portable: {
        type: String
    },
    Nom_parents: {
        type: String
    },
    Numéro_portable_parents: {
        type: String
    },
    Date_naissance: {
        type: String
    },
    Groupe_sanguin: {
        type: String
    },
    Address: {
        type: String
    }
})

module.exports = mongoose.model('students', StudentShema);
