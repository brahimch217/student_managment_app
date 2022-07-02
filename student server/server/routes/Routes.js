const express = require('express')
const router = express.Router();

const Controller = require('../controller/Controller');

router.get('/', Controller.Login);
router.post('/', Controller.Whilelogin);
router.get('/about-student', Controller.about);
router.get('/recour', Controller.Recour);
router.post('/recour', Controller.RecourOnSent);
router.get('/numero', Controller.numero);
router.post('/numero', Controller.WhileDisplay);
module.exports = router;