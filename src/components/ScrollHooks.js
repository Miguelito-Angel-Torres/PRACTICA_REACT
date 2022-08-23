import { cleanup } from '@testing-library/react';
import React,{useState,useEffect} from 'react';

export default function ScrollHooks(props) {
    const[scrollY,setScrollY]= useState(0);

    useEffect(()=>{
        console.log("Moviendo el Scroll")

        // window.pageYOffset propiedad que devuelve el numero de pixeles 
        const detectarScroll= (e)=>{setScrollY(window.pageYOffset)}
        window.addEventListener("scroll",detectarScroll)

        return () => {window.removeEventListener("scroll",detectarScroll);
        console.log("Fase de Desmontaje")}

    },[scrollY]);
    useEffect(()=>{
        console.log("Fase de Montaje")
    },[])
    useEffect(()=>{
        console.log("Fase de Actualizacion")
    })
    useEffect(()=>{
        return () =>{
            console.log("Fase de Desmontaje")
        }
    })


    return(
        <>
            <h2>{props.titulo}</h2>
            <p>{props.Scroll + ": "}{scrollY}px</p>
        </>
    )
}

ScrollHooks.defaultProps = {
    titulo : "Hooks - useEffect y el Ciclo de Vida",
    Scroll : "Scroll Y del Navegador"
}

