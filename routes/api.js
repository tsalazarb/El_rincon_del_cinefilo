const express= require('express');
const router = express.Router();

//rutas dentro de la pagina api

router.get('/peliculas', (req,res)=>{
    res.send('Peliculas...')
})

router.get('/serie', (req,res)=>{
    res.send('Series...')
})


module.exports = router;