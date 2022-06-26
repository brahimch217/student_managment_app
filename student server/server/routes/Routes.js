const express = require('express')
const router = express.Router();

const Controller = require('../controller/Controller');

router.get('/', Controller.Login);
router.post('/', Controller.Whilelogin);
router.get('/index', Controller.HomePage);
router.get('/recour', Controller.Recour);
router.get('/about-student', Controller.about);
router.post('/recour', Controller.RecourOnSent);
module.exports = router;