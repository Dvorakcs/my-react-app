import React from 'react';
import Car from './Car.js';
import FCar from './FCar.js';

class Garage extends React.Component{
  render(){
    return (
      <div>
        <h1>Who lives in my Garage</h1>
        <Car color="red" model="all"/>
        <FCar color="green" model="anyone"/>
      </div>
    )
  }
}

export default Garage;