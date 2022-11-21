const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/itemsCtrl');

router.get('/', (req, res) => {
    //res.send("Listado de items ....")
    res.json(itemsCtrl.itemsListar())
});

router.post('/', itemsCtrl.itemsguardar);

module.exports = router;
