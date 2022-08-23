import React,{Component} from 'react';

export class EventoES6 extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            contador:0,
        };
        // Vindeo se hace adentro del Constructor
        this.sumar = this.sumar.bind(this); //Metodo bin enclaza el this 
        this.restar = this.restar.bind(this);

    }
    sumar(e){
        console.log("Sumando")
        //console.log(this)
        this.setState({
            contador: this.state.contador+1,
        })
    }
    restar(e){
        console.log("Restando")
        this.setState({
            contador:this.state.contador-1,
        })
    }

    render(){
        return (
            <div>
                <h2>Evento en Componentes en Clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

//Properties Initializer
export class EventoES7 extends Component {
    state = {
        contador:0,
    };
     
    // Definir con las Arrow function
    sumar =(e)=>{
        console.log("Sumando")
        //console.log(this)
        this.setState({
            contador: this.state.contador+1,
        })
    }
    restar = (e)=>{
        console.log("Restando")
        this.setState({
            contador:this.state.contador-1,
        })
    }

    render(){
        return (
            <div>
                <h2>Evento en Componentes en Clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

/*function Botton(props){
    return (<button onClick={props.MyonClick}>Botón hecho Componente</button>)
}*/
const Botton=(props)=>(<button onClick={props.MyonClick}>Botón hecho Componente</button>);

export class MasSobreEvento extends Component {
    //Evento , Manejador de Evento 
    handleClick = (e,mensaje) =>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.baseURI)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Mas Sobre Evento</h2>
                <button onClick={(e)=>this.handleClick(e,"React")}>Saludar</button>
                {/*Evento Personalizado:Para pasar el evento a un Componente*/}
                {/*<Botton onClick={(e)=>this.handleClick(e,"React")} />*/}
                <Botton MyonClick={(e)=>this.handleClick(e,"React")} />
            </div>
        )
    }
}

    