import React from 'react';
import Car from './Car.js';
import FCar from './FCar.js';

class Garage extends React.Component{
  isFComponents = true;
  render(){
    return(
      <div>
      <h1>Who lives in my Garage</h1>
      {this.isFComponents  == true ? 
      <Car brand="teste"/>:
      <FCar color="blue" model="all"/>
      }
        
    </div>
    );
  }
}

export default Garage;