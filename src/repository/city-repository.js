const {city}=require('../models/index');

class CityRepository{
  async createCity({name}){
    try{
      const city=await city.createCity({name});
      return city;
    }
    catch(error) {
      throw {error};
    }
  }

  async deleteCity({cityid})
  {
    try{
      await city.destroy({
        where:{
          id:cityid
        }
      });

    }
    catch(error){
      throw {error};
    }

  }

  async updatecity({name}) {
    try{

    }
    catch(error){
      throw {error};
    }
  }
}
module.exports=CityRepository;