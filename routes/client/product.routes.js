const express = require("express");
const route=express.Router();
const product=require("../../../management_products/controllers/client/products.controller")

route.get("/",product.products);


module.exports=route;