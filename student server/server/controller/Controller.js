require('../models/database');

const recour = require('../models/recour');




exports.Login = async (req, res) => {
    try {
        res.render('page-login')
    } catch (error) {
        console.log(error)
    }
}

exports.HomePage = async (req, res) => {
    try {
        res.render('index')
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
            name: "sdfsdf",
            module: "qsdfqdfqss",
            matricule: "qsgqsgq",
            problem: "qsdgqergqer",
            type: "qzrgqrgq",
            Date: "qzrgqergqe",
            assets_details: "qzrgqrg",
        })
        await newRecour.save();
        res.redirect('/recour')
    } catch (error) {
        console.log(error)
    }
}
