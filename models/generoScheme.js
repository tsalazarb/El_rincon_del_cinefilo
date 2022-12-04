const mongoose=require('mongoose')

const generoSchema=mongoose.Schema(
    {
        nombre:{
            type:String,
            require:true,
            trim:true
        }
    }
)
module.exports=mongoose.model("genero",generoSchema)