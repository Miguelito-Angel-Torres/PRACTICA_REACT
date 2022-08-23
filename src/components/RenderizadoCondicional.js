import React,{Component} from 'react';
import PropTypes from 'prop-types';


function Login(){
    return(
        <div><h3>Login</h3></div>
    );
}
function Logout(){
    return(
        <div><h3>Logout</h3>
        </div>
    )
}
export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state = {
            session: true,
        }
    }

    render() {  
        return(
            <div>
                <h2>{this.props.Titulo}</h2>     
                {//Operador Ternario
                    this.state.session?  <Login/> : <Logout/>
                }
            </div>
        )
    }
}

RenderizadoCondicional.defaultProps = {
    Titulo:"Renderizado Condicional",
};

RenderizadoCondicional.propTypes = {
    Titulo:PropTypes.string.isRequired,
}