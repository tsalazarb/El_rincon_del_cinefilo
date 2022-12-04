const itemModel=require('../models/itemScheme')

const itemsListar=async(req,res)=>{
    try{
        const items=await itemModel.find()
        console.log(items)
        res.status(200).send(items)
    }catch(error){
        console.log("error itemsListar"+error)
        
    }
}


const itemsGuardar=(req,res)=>{
    console.log(req.body)
    try{
        const item=new itemModel(req.body)
        item.save()
        res.status(200).json({msj:"item guardado correctamente"})
    }catch(err){
        console.log('error item guardar'+err)
        res.status(200).json({msj:"error item guardar"+ err})
    }  
}

const itemsObtener=async(req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    if(id==1)
        res.send({"1":"Tiburon"})
    if(id==2)
        res.send({"2":"Titanic"})
    if(id==3)
        res.send({"3":"Indiana Jones"})
    //res.send("ok")
}

const itemsActualizar=async(req,res)=>{
    console.log(req.body)
    try{
        const{id,titulo}=req.body;
        let errores=false
        if(id==""){errores=true
            res.status(400).send("error act")
        }
        if(titulo==''){errores=true
            //similar guardar
            res.status(200).send("item act con éxito")
        }
        if(!errores){
            const item={}
            item.titulo=titulo
            const rta=await itemModel.updateOne(
                {"_id":id},
                {$set:item},
                {new:true}
            )
            res.status(200).send("item act con éxito")
        }
    }catch(error){
        res.status(400).send("Error actualizando el item")
        console.log("error act item")
    }
}

const itemsEliminar=async (req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    try{
        let errores=false
        if(id==""){errores=true
            res.status(400).send("error eliminado de items")
        }
        if(!errores){
            const rta=await itemModel.deleteOne({"_id":id})
            res.status(200).send("item eliminado con éxito")
        }
    }catch(error){
        res.status(400).send("Error eliminado con éxito")
    }
}

module.exports={
    itemsListar,
    itemsGuardar,
    itemsObtener,
    itemsActualizar,
    itemsEliminar
}   