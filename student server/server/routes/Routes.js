const express = require('express')
const router = express.Router();

const Controller = require('../controller/Controller');

router.get('/', Controller.Login);
router.get('/index', Controller.HomePage);
router.get('/recour', Controller.Recour)
router.post('/recour', Controller.RecourOnSent)
module.exports = router;