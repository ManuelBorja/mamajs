import React from 'react';

class FormMama extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label>Dni</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Apellidos</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Nombres</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Fecha probable de parto</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Fecha de nacimiento</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Celular</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Acompañante</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Historia</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Historia Familiar</label>
                    <input type="text"/>
                </div>
            </form>
        )
    }
}

class MuestraMama extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        var madres =  this.props.madres;
        return (
          <div className="lista-madres">
               ssds
          </div>
        );
    }

}

var MADRES = [
    {
        centro: "José Leonardo Ortiz",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "José Leonardo Ortiz",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "José Leonardo Ortiz",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "Chiclayo",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "Chiclayo",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "Lambayeque",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "Lambayeque",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "Lambayeque",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }, {
        centro: "Lambayeque",
        nombre: "Lucila Campos",
        parto: "01/01/2017"
    }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Mantenimiento de Madres</h1>
                <div>
                    <FormMama/>
                </div>
                <MuestraMama madres={MADRES}/>
            </div>
        );
    }
}

export default App;
