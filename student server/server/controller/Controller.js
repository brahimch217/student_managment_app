require('../models/database');

const recour = require('../models/recour');

const student = require('../models/student');

const note = require('../models/note');


const userNote = '';

exports.Login = async (req, res) => {
    try {
        res.render('page-login')
    } catch (error) {
        console.log(error)
    }
}
exports.Whilelogin = async (req, res) => {

    const user = await student.findOne({ Email: req.body.email, });
    if (req.body.email != null && req.body.pass != null) {
        try {

            res.render('about-student', { user });
        } catch (error) {
            console.log(error)
        }
    }
}
exports.WhileDisplay = async (req, res) => {

    //const note = await note.findOne({ numéro: req.body.numero, });
    if (req.body.numero != null) {
        //console.log(req.body.numero)
        try {
            res.render('note',);
        } catch (error) {
            console.log(error)
        }
    }
}



exports.about = async (req, res) => {
    try {
        res.render('about-student')
    } catch (error) {
        console.log(error)
    }
}

exports.Recour = async (req, res) => {
    try {
        res.render('recour')
    } catch (error) {
        console.log(error)
    }
}
exports.RecourOnSent = async (req, res) => {
    try {
        const newRecour = new recour({
            name: req.body.prénom + req.body.nom,
            module: req.body.module,
            matricule: req.body.matricule,
            email: req.body.email,
            problem: req.body.probleme,
            type: req.body.type,
            Date: req.body.date,
            assets_details: req.body.assets,
        })
        await newRecour.save();
        res.redirect('/recour')
    } catch (error) {
        res.redirect('/recour');
    }
}
exports.numero = async (req, res) => {
    try {
        const notes = await note.find({ numéro: '0558890861' });
        res.render('numero', { notes })
    } catch (error) {
        console.log(error)
    }
}
exports.WhileDisplay = async (req, res) => {

    if (req.body.numero != null) {
        const notes = await note.find({ numéro: req.body.numero });
        const not = await note.findOne({ numéro: req.body.numero, semestre: req.body.semestre });
        console.log(req.body.numero)
        try {
            res.render('note', { notes, not });
        } catch (error) {
            console.log("Ma afichawch")
        }
    }
}
