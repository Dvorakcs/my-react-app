import React from 'react';
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand: "Ford",
      model:"Mustang",
      color: "red",
      year:1964,
    }
  }
  chengeColor = () => {
    this.setState({color:"blue"})
  }
  // FUNCAO CHAMADA SEMPRE ANTES DE RENDERIZAR O COMPONENTE NO DOM
  // ATUALIZA O ESTADO DO COMPONENT
  static getDerivedStateFromProps(props,state){
    return {brand:props.brand ?? "Ford"}
  }
  render(){
   return ( 
    <div>
      <h1>My {this.state.brand}</h1>
      <p>
        It is a {this.state.color}, {this.state.model}
        from {this.state.year}.
      </p>
      <button type='button'
      onClick={this.chengeColor}>Change color</button>
    </div>
   )
  }
} 
export default Car;