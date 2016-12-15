import React, { Component } from 'react';
import MadreItem from './MadreItem';
import Centro from './Centro';

class Madres extends Component {
  render() {
    let madresitems;
    let categoria;
    if(this.props.madres){
      madresitems = this.props.madres.map(
        (madre) => {
          if(categoria!=madre.centro){
            categoria = <Centro nombre="{madre.centro}" />
          };
          return (
            <div>
               {categoria}
               <MadreItem madre={madre} />
            </div>
          );
        }
      );
    }
    return (
      <div>
          {madresitems}
      </div>
    );
  }
}

export default Madres;
