const mongoose=require('mongoose')

const itemSchema=mongoose.Schema(
    {
        titulo:{
            type:String,
            require:true,
            trim:true
        },
        tipo:{
            type:String,
            require:true,
            trim:true
        },
        genero:{
            type:String,
            require:true,
            trim:true
        },
        año:{
            type:String,
            require:true,
            trim:true
        },
        duracion:{
            type:Number,
            require:true,
        },
        actores:{
            type:Array
        },
        created_at:{
            type:Date,
            default:Date.now()
        },
        creado_por:{
            type:String,
            require:true,
            trim:true
        },
        imagen:{
            type:String,
            require:true,
            trim:true
        },
        video:{
            type:String,
            require:true,
            trim:true
        }
        }
    
)
module.exports=mongoose.model("item",itemSchema)