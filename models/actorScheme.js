const mongoose=require('mongoose')

const actoresSchema=mongoose.Schema(
    {
        nombre:{
            type:String,
            require:true,
            trim:true
        }

})
module.exports=mongoose.model("actores",actoresSchema)