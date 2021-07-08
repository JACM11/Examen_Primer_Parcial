const mongoose = require("mongoose");
const express = require("express");
const cron = require("node-cron");
const path = require("path");
const app = express();
const morgan = require('morgan');

//Variables de entorno
const {URL} = require('./config')
const {Puerto} = require('./config')

//Rutas
const {Factura} = require("./routes");


//PORT
app.set('port', Puerto);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//Conexion DB
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true});

//Usamos las rutas
app.use(Factura);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//empezando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en el puerto ${Puerto}`);
});
