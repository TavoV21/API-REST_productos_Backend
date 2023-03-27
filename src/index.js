const express = require('express');
const cnx=require('../src/config/conexion');
const cors=require("cors");
const path= require("path");
const app= express();
const PORT= process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//almacena imagenes
app.use('/uploads', express.static(path.resolve('src/uploads')));

app.use('/api/productos', require('./routes/productos'));

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
console.log(cnx);

module.exports=server;