const express = require('express')
const router=express.Router()
const multer=require('multer')
const upload=multer({dest:"public/images/"})
const fs=require('node:fs')
const actoresCtrl=require('../controller/actoresCtrl')
console.log(actoresCtrl)

router.get("/",actoresCtrl.actorListar)
router.put('/imagen/:id', upload.single('imagen'), async(req,res)=>{
        const imagen=req.file
        console.log("recibiendo archivo")
        console.log(imagen.mimetype)
        console.log("archivo subido como"+imagen)
        const id=req.params.id
        fs.rename('./public/images/' +imagen.filename, './public/images/' + id + '.jpg', ()=>{console.log("cambios realizados")})
        res.status(200).json({msj:"imagen cargada"})
    }

)
module.exports=router
