import React, { Component } from 'react';
import Madres from './Componentes/Madres';
import './App.css';

var MADRES = [
  {nombre:'Jacinta Quiñones',centro:'Leonardo Ortiz'},
  {nombre:'Perla  de los Rios',centro:'Leonardo Ortiz'},
  {nombre:'Paola Bellido',centro:'Chiclayo'},
  {nombre:'Amanda Puertas',centro:'Chiclayo'}
]

class App extends Component {
  constructor(){
    super();
    this.state = {madres:MADRES};
  }

  render() {
    return (
      <div className="App">
           Programa MAMA 2
           <Madres madres={this.state.madres} />
      </div>
    );
  }
}

export default App;
