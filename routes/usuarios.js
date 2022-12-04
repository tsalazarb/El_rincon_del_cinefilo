const express = require('express')
const router=express.Router()
const usuariosCtrl  =require('../controller/usuariosCtrl')

router.post('/', usuariosCtrl.usuarioGuarda)
router.post("/login/", usuariosCtrl.usuarioLogin)
module.exports=router