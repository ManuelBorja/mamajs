import React, { Component } from 'react';
import MadreItem from './MadreItem';
import Centro from './Centro';

class Madres extends Component {
  render() {
    let lineas = [];
    let uCentro = null;
    if(this.props.madres){
      this.props.madres.forEach(function(madre){
        if(uCentro!==madre.centro){
          lineas.push( <Centro centro={madre.centro} key={madre.centro} />);
          uCentro=madre.centro;
        };
        lineas.push( <MadreItem nombre={madre.nombre} key={madre.dni} />);
      });
    };
    return (
      <div>
          {lineas}
      </div>
    );
  }
}

export default Madres;
