import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Productos = () => {
    // useLocation:Es un objeto que contiene propiedades 
    let Location = useLocation()
    console.log(Location)
    let {search} = useLocation();
    // Instancia es de Javascript
    let query = new URLSearchParams(search);
    //console.log(query)
    // Los params : inicio y final
    // Conteniendo el valor de los parametros
    const LIMIT = 20;
    let start =  parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || LIMIT;
    //console.log(start, end);
    //Hooks para manejar el historial del navegador web
    let history = useHistory();
    console.log(history);

    const handlePrev = (e)=>{
        history.push({search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`});
    }
    const handleNext = (e)=>{
        history.push({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`});
    }

    return (
        <div>
            <h2>Productos</h2>
            <p>Mostrando producto del :<b>{start}</b>al
            <b>{end}</b>.</p>
            {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
            <button onClick={handleNext}>Adelante</button>
        </div>
    )}

export default Productos

