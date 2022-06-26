require('../models/database');

const Discover = require('../models/Discover');
const Filds = require('../models/Filds');
const Events = require('../models/event');
const Artisan = require('../models/Artisan');
const Words = require("../models/Words")

/**
 * GET / 
 * Homepage
 */
exports.homepage = async (req, res) => {
    try {
        const discover = await Discover.find({});

        const fildsData = await Filds.find({});
        const filds = { fildsData }

        const eventsData = await Events.find({});
        const events = { eventsData }

        const artisanData = await Artisan.find({});
        const artisan = { artisanData }

        const wordsData = await Words.find({});
        const words = { wordsData }



        res.render('index', { discover, filds, events, artisan, words, fildsData });

    } catch (error) {
        console.log(error)
    }
}

exports.vrtPage = async (req, res) => {
    try {
        res.render('vrt');
    }
    catch (error) {
        console.log(error)
    }
}



