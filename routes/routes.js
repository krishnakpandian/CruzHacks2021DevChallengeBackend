// routes.js
const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

// Creates Routes and passes in controllers
router.post('/api/createHacker', controller.createHacker);
router.get('/api/getHackers', controller.getAllHackers);
router.get('/api/getHacker/:id', controller.getHacker);
router.delete('/api/deleteHacker/:id', controller.deleteHacker);

module.exports = router;