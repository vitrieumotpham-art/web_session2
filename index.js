    require("dotenv").config();
    const express = require("express");
    const database= require("./config/database")
    const routeAdmin = require("./routes/admin/index.router");
    const route = require("./routes/client/index.routes");
 

    database.connect();

    const app=express();
    const port =process.env.PORT;

    app.set("views","./views");
    app.set("view engine","pug");

    app.use(express.static("public"));

    routeAdmin(app);
    route(app);


    app.listen(port, ()=>{
        console.log(`App listening on port ${port}`);
    });
