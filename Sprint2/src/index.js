const express =  require ('express');
const app = express();
const puerto = 3000;
app.set('json spaces' , 2);
const items = require('./controllers/itemsCtrl');
console.log(items.itemsListar());

app.get('/', (req, res) =>{
    res.send('BIENVENIDOS')
});


app.use(express.json());
app.use('/api/paginas', require('./routes/paginas'));
app.use('/api/peliculas', require('./routes/peliculas'));
app.use('/api/items', require('./routes/items'));


app.listen(puerto, () =>{
    console.log("Servicio activo puerto:" +puerto)
});


