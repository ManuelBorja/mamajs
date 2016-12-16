import React, { Component } from 'react';
import Madres from './Componentes/Madres';
import './App.css';

var MADRES = [
  {nombre:'Jacinta Quiñones',centro:'Leonardo Ortiz',dni:'09500001'},
  {nombre:'Perla  de los Rios',centro:'Leonardo Ortiz',dni:'09500002'},
  {nombre:'Paola Bellido',centro:'Chiclayo',dni:'09500003'},
  {nombre:'Amanda Puertas',centro:'Chiclayo',dni:'09500004'}
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
