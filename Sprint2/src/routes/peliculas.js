const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Peliculas cargadas ....")
});

module.exports = router;