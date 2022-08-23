import React,{Component} from 'react';

class Reloj extends Component{
    constructor(props){
        super(props);

    }
    componentWillUnmount() {
        console.log(3,"El componente ha sido eliminado del DOOM")
    }
    render(){
        return (
            <h3>{this.props.hora}</h3>
        )
    }
}


export default class CicloVida extends Component {
    constructor(props){
        super(props);
        console.log(0,"El Componente se Inicializa,aun No esta en el DOM")

        this.state = {
            // toLocaleDateString() function que te da la hora en modo string de la Clase Date (Instanciar)
            hora:new Date().toLocaleTimeString(),
            visible:false
            
        }
        this.temporizado = null;
    }
    iniciar = (e) => {
        this.tictac()
        this.setState({
            visible:true
        })

    }
    detener = (e) => {
        console.log("Detener")
        //"Metodo para cancelar el llamdo de la function setInterval"
        clearInterval(this.temporizado)
        this.setState({
            visible:false
        })


    }
    componentDidMount() {
        console.log(1,"El Componente ya se Encuentra en el DOM")
    }
    componentDidUpdate(prevProps,prevState) {
        console.log(2,"El estado o las props del componente han cambiado")
        console.log(prevProps);
        console.log(prevState);
    }
    
    tictac = (e) => {
        this.temporizado = setInterval((
        ) => {
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        },1000);
        
    }

    render(){
        console.log(4,"El Componente se dibuja(o redibuja por algun cambio)en el DOM")
        return(
            <>
                <h2>{this.props.mensaje}</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <h3>{this.temporizado}</h3>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>

            </>
        )
    }
}

CicloVida.defaultProps = {
    mensaje:"Ciclo de Vida de los Componente de Clase"
}

