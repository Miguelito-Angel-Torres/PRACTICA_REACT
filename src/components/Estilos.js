import React from 'react'
import "./Estilos.css"
import moduleStyle from  "./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos({titulo}){
    let myStyle = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%",
    };
    return(
        <>
            <section className="estilos">
                <h2>{titulo}</h2>
                <h3 className="bg-react">
                    Estilo en Hoja CSS externa
                </h3>
                <h3 className="bg-react" style={{borderRadius:".25rem",margin:"1rem"}}>
                    Estilo en linea (atributo style)
                </h3>
                <h3 className="bg-react" style={myStyle}>Estilo en linea</h3>
                <h3 className="bg-react" >Agregando Normalize con <br/><code>@import-normalize;</code></h3>
                <h3 className={moduleStyle.error} >Estilos con Modulos</h3>
                <h3 className="bg-sass" >Estilos con SASS</h3>

            </section>
        </>
    )
}

Estilos.defaultProps = {
    titulo: "Estilos CSS en React"
}