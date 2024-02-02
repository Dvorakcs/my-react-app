import React from 'react';
import Car from './Car.js';
import FCar from './FCar.js';

class Garage extends React.Component{
  isFComponents = true;
  CarList =[
    {id:1, brand:'Ford', color:"red", year:1990},
    {id:2, brand:'BMW', color:"blue", year:1995},
    {id:3, brand:'Audi', color:"green", year:2000}
  ]
  render(){
    return(
      <div>
      <h1>Who lives in my Garage</h1>
      {this.isFComponents  == true ? 
      this.CarList.map((car) => <Car key={car.id} brand={car.brand} color={car.color} year={car.year}/>):
      <FCar color="blue" model="all"/>
      }
        
    </div>
    );
  }
}

export default Garage;