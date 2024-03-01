const express=require("express");

const bodyparser=require("body-parser");

const{port}=require('./config/serverconfig')
const ApiRoutes =require('./routes/index');

const db= require('./models/index');
const {City,Airport}= require('./models/index');
 
const CityRepository=require('./repository/city-repository')
 
const setupAndStartServer=async()=>{
  //create an express object
  const app=express();

   app.use(bodyparser.json());
   app.use(bodyparser.urlencoded({extended:true})); 

   app.use('/api',ApiRoutes);
  
  
   app.listen(port,async()=>{
  
    console.log(`Server started at ${port}`);

    console.log(`hii theren`);
    
    /*if(process.env.SYNC_DB){
      db.sequelize.sync({alter:true});
    }*/

    
     
  }); 

}

setupAndStartServer();