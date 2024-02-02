import React from 'react';
class Car extends React.Component{
  constructor(){
    super();
    this.state = null;
    this.modelCar = null
  }
  render(){
    this.state = this.props.color ?? {color:'red'};
    this.modelCar = this.props.model ?? {model:'Mustang'}
    return <h2>Hi, I am a {this.state} and model: {this.modelCar} car</h2>
  }
} 
export default Car;