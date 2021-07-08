const mongoose = require("mongoose");
const {Schema} =mongoose;


const Factura_Schema = new Schema({
    fecha:Date,
    cliente:String,
    habitacion:Number,
    dias:Number,
    precio:Number,
    por_pagar:Number

});

module.exports=mongoose.model('Factura',Factura_Schema);