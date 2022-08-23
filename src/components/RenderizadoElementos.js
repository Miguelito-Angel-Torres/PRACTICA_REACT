import React,{Component} from 'react';
import PropTypes from 'prop-types';
import data from "../helpers/data.json"

function ElementoLista(props) {
    return(
        <div>
        <li>
            <a href={props.propelemento.web} target="_blank">{props.propelemento.name}</a>
        </li>
        
            {props.arreglo.map((elemento) => <p key={elemento}>{elemento}</p>)}

        </div>

    )
}


export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            estaciones:["Primera","Verano","Otoño","Invierno"]
        }


    }
    render(){
        console.log(data);
        return (
            <div>
                <h2>{this.props.Titulo}</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {this.state.estaciones.map((elemento, index)=> (<li key={index}>{elemento}</li>))}
                </ol>
                <h3>Frameworks Fronted JavaScript</h3>
                <ul>{
                    data.frameworks.map((elemento,index)=> <ElementoLista key={elemento.id} propelemento={elemento} arreglo = {[1,2,3]}/>)
                    }</ul>
            </div>
        )
    }

}

RenderizadoElementos.defaultProps = {
    Titulo:"Renderizado Elemenots",
};

RenderizadoElementos.propTypes = {
    Titulo:PropTypes.string.isRequired,
}
