const express = require("express");
const route=express.Router();

const home=require("../../../management_products/controllers/client/home.controller");

route.get("/",home.home);


module.exports=route;