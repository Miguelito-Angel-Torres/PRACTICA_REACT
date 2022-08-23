import React from 'react'
import { useFetch } from '../hooks/useFetch'

export default function HooksPersonalizado({mensaje}){
    let url ="https://pokeapi.co/api/v2/pokemon/"
    url = "https://jsonplaceholder.typicode.com/users456";
    // Extraer las propiedades que mandamos del return:
    let {data,isPending,variableError} = useFetch(url)

    //console.log(useFetch())
    return(
        <>
            <h2>{mensaje}</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3><mark>{JSON.stringify(variableError)}</mark></h3>
            <h3><pre style={{whiteSpace: "pre-wrap"}}
            ><code>{JSON.stringify(data)}</code></pre></h3>


        </>
    )
}

HooksPersonalizado.defaultProps = {
    mensaje:"Hooks Personalizado"
}


