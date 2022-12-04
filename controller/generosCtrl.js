const generoModel=require('../models/generoScheme')
const generoListar=async(req,res)=>{
    try{
        const generos=await generoModel.find()
        console.log(generos)
        res.status(200).send(generos)
    }catch(error){
        console.log("error generoListar"+error)
    }
}
module.exports={
    generoListar
}