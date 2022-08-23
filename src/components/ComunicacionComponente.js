import React,{Component} from 'react';
import Hijo from './ComunicacionHijo'

export class Padre extends Component {
    state = {
        contador:0,
    };

    incrementarContador = (e) => {
        this.setState({contador: this.state.contador+1})

    }
    render(){
        return (
            <>
                <h2>Comunicacion entre Componente</h2>
                <p>Contador:{this.state.contador}</p>
                <Hijo Contador={this.incrementarContador} mensaje = "Mensaje React 1"/>
            </>
        )   
    }
}

//Componente no relacionadas

