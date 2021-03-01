// routes.js
const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

// Creates Routes and passes in controllers
router.post('/createHacker', controller.createHacker);
router.get('/getHackers', controller.getAllHackers);
router.get('/getHacker/:id', controller.getHacker);
router.delete('/deleteHacker/:id', controller.deleteHacker);

module.exports = router;