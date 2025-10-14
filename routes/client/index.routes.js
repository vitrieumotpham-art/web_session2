const productRoute=require("./product.routes");
const productHome=require("./home.routers.js");

module.exports=(app)=>{
app.use("/",productHome);

app.use("/products",productRoute);
}