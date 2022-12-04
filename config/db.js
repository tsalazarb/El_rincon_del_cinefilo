const mongoose=require('mongoose')
const URIDB='mongodb://localhost:27017/G35'

module.exports=()=>{
    const conn=()=>{
        mongoose.connect(
            URIDB,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology:true,
                family:4
            },
            (err)=>{
                if(err){
                    console.log("Error de conexión:" + err)
                }else{
                    console.log("conexión con DB existosa")
                }
            }
        )
    }
    conn()
}