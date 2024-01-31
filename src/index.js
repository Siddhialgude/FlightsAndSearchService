const express=require("express");
const bodyparser=require("body-parser");
const{port}=require("./config/serverconfig")

const setupAndStartServer=async()=>{
  //create an express object
  const app=express();
   app.use(bodyparser.json());
   app.use(bodyparser.urlencoded({extended:true}));
  app.listen(port,()=>{
    console.log(`Server started at ${port}`);
    //console.log(process.env);
  });
}
setupAndStartServer();