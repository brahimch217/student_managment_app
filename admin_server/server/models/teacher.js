
const mongoose = require('mongoose');

const TeacherShema = new mongoose.Schema({
    Nom: { type: String },
    Prénom: { type: String },
    Email: { type: String },
    Registration_Date: { type: String },
    Mot_passe: { type: String },
    Gener: { type: String },
    Numéro_portable: { type: String },
    Désignation: { type: String },
    Départment: { type: String },
    Date_naissance: { type: String },
    Éducation: { type: String }
})

module.exports = mongoose.model('Teacher', TeacherShema);