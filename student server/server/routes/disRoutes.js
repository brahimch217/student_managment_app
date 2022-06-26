const express = require('express')
const router = express.Router();

const disController = require('../controller/disController');

/**
 * App Routers
 */

router.get('/', disController.homepage);
router.get('/vrt', disController.vrtPage)

module.exports = router;