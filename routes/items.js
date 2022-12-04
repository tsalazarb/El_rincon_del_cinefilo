const express=require('express')
const router=express.Router()
const itemsCtrl=require('../controller/itemsCtrl')

router.get('/',itemsCtrl.itemsListar)

router.get('/:id',itemsCtrl.itemsObtener)
router.post('/',itemsCtrl.itemsGuardar)
router.put('/',itemsCtrl.itemsActualizar)
router.delete('/:id',itemsCtrl.itemsEliminar)

module.exports=router