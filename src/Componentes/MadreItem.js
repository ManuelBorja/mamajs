import React, { Component } from 'react';

class MadreItem extends Component {
  render() {
    return (
      <div>
           <h1>{this.props.madre.centro}</h1>
           {this.props.madre.nombre}
      </div>
    );
  }
}

export default MadreItem;
