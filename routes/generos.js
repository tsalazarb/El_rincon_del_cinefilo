const express = require('express')
const router=express.Router()
const generosCtrl=require('../controller/generosCtrl')

router.get("/",generosCtrl.generoListar)
module.exports=router
