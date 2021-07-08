const express = require("express");


const router = express.Router();
const {factura}=require("../models");

router.get('/',async (req,res)=>{
    const lista=await factura.find();
    res.render('factura', {data: lista});
});

router.post('/add',async (req, res) =>{
    await factura.create({fecha: req.body.fecha,
                           cliente: req.body.cliente,
                           habitacion: req.body.habitacion,
                           dias: req.body.dias,
                           precio: req.body.precio,
                           por_pagar: req.body.por_pagar});
    res.redirect('/');
});

module.exports=router;