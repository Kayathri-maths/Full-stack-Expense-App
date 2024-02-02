const path = require('path');

const express = require('express');

const router = express.Router();

const itemController = require('../controllers/details');

router.post('/post-item', itemController.addItem);

router.get('/get-item', itemController.getItem);

router.put('/quantity/:id', itemController.putItem);

router.delete('/delete-item/:id',itemController.deleteItem);

module.exports = router;