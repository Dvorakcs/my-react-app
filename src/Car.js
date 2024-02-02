import React from 'react';
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      brand: props.brand,
      model:props.model,
      color: props.color,
      year:props.year,
    }
  }
  chengeColor = () => {
    this.setState({color:"blue"})
  }
  // FUNCAO CHAMADA SEMPRE ANTES DE RENDERIZAR O COMPONENTE NO DOM
  // ATUALIZA O ESTADO DO COMPONENT
  //
  static getDerivedStateFromProps(props,state){
    return 
  }
  //SEMPRE QUANDO TERMINA DE INICIALIZAR NO DOM
  componentDidMount(){
      this.setState()
  }
  //Retorna valor true/false para continuar a renderizacao ou nao
  shouldComponentUpdate() {
   return true;
  }
  componentDidUpdate() {
    
  }
  componentWillUnmount() {
   // alert("The component named Header is about to be unmounted.");
  }
  render(){
   return ( 
    <div>
      <h1>My {this.state.id} {this.state.brand}</h1>
      <p>
        It is a {this.state.color}, {this.state.model}, 
        from {this.state.year}.{this.index}
        
      </p>
      <button type='button'
      onClick={this.chengeColor}>Change color</button>
    </div>
   )
  }
} 
export default Car;