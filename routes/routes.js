const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

router.post('/createHacker', controller.createHacker);
router.get('/getHackers', controller.getAllHackers);
router.get('/getHacker/:id', controller.getHacker);
router.patch('/updateHacker/:id', controller.updateHacker);
router.delete('/deleteHacker/:id', controller.deleteHacker);

module.exports = router;