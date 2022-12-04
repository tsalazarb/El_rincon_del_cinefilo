const usuarioModel=require('../models/usuarioScheme')
const bcrypt=require('bcryptjs')

const usuarioGuarda=async(req,res)=>{
    console.log("guardando usuario")
    console.log(req.body)
    //res.send("...")
    try{
        const usuario = new usuarioModel(req.body)
        usuario.contrasena=await bcrypt.hash(usuario.contrasena, 10)
        await usuario.save()
        res.status(200).json({msj:"usuario creado"})
    }catch(error){console.log("error guardado" + error)}
        //res.status(400).json({msj:"error guardando usuario"})
}

const usuarioLogin=async(req,res)=>{
    console.log("intento de login")
    console.log(req.body)
    const {correo,contrasena}=req.body
    try{
        errores=false
        if(correo ==''){errores=true
            res.status(400).json({msj:"el correo no es valido"})
        }
        if(contrasena ==''){errores=true
            res.status(400).json({msj:"Contraseña no es valido"})
        }
        if(!errores){
            let usuario=await usuarioModel.findOne({'correo':correo, 'contrasena':contrasena})
            console.log(usuario)
            if(usuario){
                res.status(200).json({msj:"ok"})
            }else{
                res.status(400).json({msj:"no"})
            }
            }   
    }catch(error){
        console.log(error)
        res.status(400).json({msj:"error en login"})
    }
}

module.exports={
    usuarioLogin,
    usuarioGuarda
}