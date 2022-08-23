import React,{Component} from 'react';

function Pokemon(props) {
    return (
            <figure>
                <img src={props.avatar} alt={props.name} />
                <figcaptin>{props.name}</figcaptin>
            </figure>
    )
}



export default class AjaxApis extends Component {
    state = {
        pokemons: [],
    }
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/"
        // Realizacion de Feticion Fetch:
        fetch(url)
         .then(res => res.json())
         .then(json => {
            //console.log(json);
            //console.log(json.results[0].name);
            json.results.forEach(elemento =>{
                fetch(elemento.url)
                 .then(res => res.json())
                 .then(json => {
                     //console.log(json);
                     let pokemon = {
                         id: json.id,
                         name: json.name,
                         avatar:json.sprites.front_default
                     }
                     //console.log(pokemon.name);
                     // Creacion de Variable llamada Pokemon
                     let pokemons = [...this.state.pokemons,pokemon];
                     this.setState({pokemons});

                 })
                 

            })
         })

    
    }


    render() {
        return (
            <>
                <h2>{this.props.mensaje}</h2>
                {this.state.pokemons.length === 0? <h3>Cargando...</h3>:(this.state.pokemons.map(elemento => <Pokemon 
                name = {elemento.name} avatar={elemento.avatar} />))}   
            </>
        )
    }
}


AjaxApis.defaultProps = {
    mensaje:"Peticiones Asincronas de Componente de Clases"
}