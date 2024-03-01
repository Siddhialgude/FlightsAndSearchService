const {FlightRepository,AirplaneRepository}=require('../repository/index');

const {compareTime}=require('../utils/helper');

class FlightService{
  constructor(){
    this.airplaneRepository=new AirplaneRepository();
    this.flightRepository=new FlightRepository();
  }
  async createFlight(data){
    try{

      if(!compareTime(data.arrivalTime,data.departureTime)){
        console.log("arrival time can't be less than departure time ");
        throw{error:'arrival time should be greater than departure'}
      }
      const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight=await this.flightRepository.createFlight({
      ...data, totalSeats:airplane.capacity 
      });
      return flight
    }
    catch(error){
      console.log("something went wrong at service layer");
      throw {error};
    }
  }
  async getFlightData(){


  }
}
module.exports=FlightService;

/*
flightNumber ,
airplaneId ,
departureAirportId ,
arrivalAirportId ,
totalSeats ,
arrivalTime  ,
departureTime  ,
price
*/