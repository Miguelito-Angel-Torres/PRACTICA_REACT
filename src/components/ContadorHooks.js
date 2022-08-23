import React,{useState} from 'react'

export default function ContadorHooks(props){
    //console.log(useState)
    // Definir estructuracion de useState
    const [contador,setContador] = useState(0)
    const [Palabra,setPalabra] = useState("Hooks - useState")
    const [Boleano,setBoleano] = useState(true)

    const sumar = (e) => { setContador(contador + 1)}
    const restar = (e) => { setContador(contador - 1 );setPalabra(Palabra + "Hooks - useState" )
    ;setBoleano(false)}
    return(
        <>
            <h2>{Palabra}</h2>
            <h3>{contador}</h3>
            <h3>{props.mensaje}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>

        </>
    )
}
ContadorHooks.defaultProps = {
    mensaje:"Hooks - useState"
}