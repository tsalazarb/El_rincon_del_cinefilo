const http = require('http');

const puerto=3000;
//acceder a archivos
const fs= require('fs') //FileSystem

function getText(url){
    return new Promise(function(resolve, reject){
        fs.readFile(url, 'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}


http.createServer(function(req, res){
    console.log(req.url)

    if(req.url=='/'){
        res.write("Bienvenido");
        return res.end()
    }

    //Sirve para leer el archivo "registro.html"
    if(req.url=='/registro'){
        getText('registro.html')
        .then((result)=> console.log(result))
        .catch((error)=> console.log(error))
        const arch = fs.readFileSync("registro.html","utf-8")
        res.write(arch)
        return res.end()
    }
}).listen(puerto)

console.log("Servidor activo en el puerto"+puerto)