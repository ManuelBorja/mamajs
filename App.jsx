import React from 'react';

var MADRES = [
{centro:"José Leonardo Ortiz",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"José Leonardo Ortiz",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"José Leonardo Ortiz",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"Chiclayo",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"Chiclayo",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"Lambayeque",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"Lambayeque",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"Lambayeque",nombre:"Lucila Campos",parto:"01/01/2017"},
{centro:"Lambayeque",nombre:"Lucila Campos",parto:"01/01/2017"}
]

class MuestraMama extends React.Component{
    render(){
         return (
<div>
<div>Region</div>
<div>Centro de salud</div>
<div>Madre</div>
<div>Fecha de Parto</div>
</div>
         )
    }
}

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Mantenimiento de Madres</h1>
            <MuestraMama madres={MADRES} />
         </div>
      );
   }
}

export default App;
