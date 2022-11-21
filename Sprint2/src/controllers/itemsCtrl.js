const itemsListar = () =>{
    const listado = {
        "1" : "Vengadores",
        "2" : "Terminator",
        "3" : "Hulk",
        "4" : "Piratas del Caribe",
        "5" : "Aliens"
    }
    return listado;
};

const itemsguardar = (req, res) => {
    console.log(req.body)
    res.send("ok")
}

module.exports = {
    itemsListar,
    itemsguardar
};

