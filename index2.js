const express= require('express');
const app= express();
const puerto=3000;

app.get('/', (req,res)=>{
    res.send('Tripulante');
})

//ruta de una pagina
//importamos rutas
app.use('/about', require('./routes/paginas'))
app.use('/api', require('./routes/api'))

//()=> esto es una funcion flecha
app.listen(puerto, ()=>{
    console.log("Servidor activo: "+puerto)
})