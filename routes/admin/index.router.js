const systemConfig=require("../../config/system");
const dashBoardRoute=require("./dashboard.routes");


module.exports=(app)=>{
  const path_admin=systemConfig.prefixAdmin;
app.use(path_admin+"/dashboard",dashBoardRoute);
} 