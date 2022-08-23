import React,{useState,useEffect} from "react";

function Pokemon({avatar,name}) {
    return (
            <figure>
                <img src={avatar} alt={name} />
                <figcaptin>{name}</figcaptin>
            </figure>
    )
}

export default function AjaxHooks({mensaje}){
    const [Pokemons,SetPokemons] = useState([])

    /*useEffect(()=>{
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
                     // Destructurar indica esos tres puntos : ...
                    SetPokemons((Pokemons) => [...Pokemons,pokemon])
                 })
            })
         })
    },[])*/
    // Funciones Asincronas

    useEffect(()=>{
        // Crear function para convertirlo asincrona
        const getPokemons = async (url) => {
            // Formato de Peticion asincrona seria:
            let res = await fetch(url),
              json = await res.json()
             //console.log(json);
              json.results.forEach(async(elemento)=>{
                let res = await fetch(elemento.url)
                      json = await res.json()
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar:json.sprites.front_default
                        };
                        // Destructurar indica esos tres puntos : ...
                    SetPokemons((Pokemons) => [...Pokemons,pokemon])
                        
             });
   
        } 
        getPokemons("https://pokeapi.co/api/v2/pokemon/")
        // Realizacion de Feticion Fetch:
    },[])

    return(
        <>  
            <h2>{mensaje}</h2>
            {Pokemons.length === 0? <h3>Cargando...</h3>:(Pokemons.map(elemento => <Pokemon
                name = {elemento.name} avatar={elemento.avatar} />))}
        </>
    )
}

AjaxHooks.defaultProps = {
    mensaje:"Peticiones Asincronas - Hooks"
}


