import React,{Component} from 'react';

function EstadoHijo(props) {
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}
export default class Estado extends Component{
    constructor(props) {
        // super llamar al constructor del objeto la cual hereda(Component)
        super(props);
        this.state = {
            contador: 0,

        }
        /*setInterval(() => {
            //Cada Segundo actualizo el estado
            this.setState({
                contador: this.state.contador + 1,        
            });
        }, 1000);*/
    }
    render() {
        return(
            <div>
                <h2>Estado</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo ={this.state.contador} />
            </div>

        );
    }
}

// https://www.youtube.com/watch?v=iNAQ3MFjNos&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=7