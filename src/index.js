const express=require("express");
const{port}=require("./config/serverconfig")
const setupAndStartServer=async()=>{
  //create an express object
  const app=express();
   
  app.listen(port,()=>{
    console.log(`Server started at ${port}`);
    //console.log(process.env);
  });
}
setupAndStartServer();