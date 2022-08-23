/*Componente pasado a Clase*/
import React,{Component} from 'react';

const Componentes = props => <h2>{props.variable}</h2>

/*function Componentes(props){
    return <h2>{props.variable}</h2>
}*/   

/*class Componente extends Component{
    #Por default debe contener el metodo render 
    render(){
        return <h2>{this.props.variable}</h2>

    }}*/
export default Componentes;

