const actorModel=require('../models/actorScheme')
const actorListar= async(req,res)=>{
    try{
        const actores=await actorModel.find()
        console.log(actores)
        res.status(200).send(actores)
    }catch(error){
        console.log("error actorListar"+error)
    }
}
module.exports={
    actorListar
}