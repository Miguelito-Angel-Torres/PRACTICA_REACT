import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {
    //El hooks useParams contiene los parametros enviados en forma de objectos
    //let params = useParams()
    //console.log(params)
    // Hooks de react-router : useParams
    let {username} = useParams()
    return (
        <div>
            <h2>Perfil de Usuario</h2>
            <p>Nombre del Usuario <b>{username}</b></p>

        </div>
    )}

export default Usuario