const express=require("express");

const bodyparser=require("body-parser");

const{port}=require('./config/serverconfig')

const CityRepository=require('./repository/city-repository.js')
try{
const setupAndStartServer=async()=>{
  //create an express object
  const app=express();
   app.use(bodyparser.json());
   app.use(bodyparser.urlencoded({extended:true}));
  
  app.listen(port,async()=>{
  
    console.log(`Server started at ${port}`);
    const repo=new CityRepository();
    repo.deleteCity({cityid:1});
  }); 

}
}catch(error){
  throw error;
}
setupAndStartServer();