import React from 'react';
import Car from './Car.js';
import FCar from './FCar.js';
function FGarage(){
  return(
    <div>
    <h1>Who lives in my Garage</h1>
    <Car brand="teste"/>
    <FCar color="blue" model="all"/>
  </div>
  );
}

export default FGarage;