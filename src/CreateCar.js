import React from 'react';
class CreaterCar extends React.Component{
  constructor(){
    super();
    this.state = {
        valueImputNameCar: ""
    }
  }

  componentDidUpdate(){
    console.log(this.state.valueImputNameCar)
  }
  render(){
    return(
      <form>
        <label>Enter Name Car
          <input type="text"  onChange={ (e) => this.state.valueImputNameCar = e.target.value}/>
        </label>
        <button onClick={ () => { console.log(this.state.valueImputNameCar)}}></button>
      </form>
    )
  }
}
export default CreaterCar;