import React from 'react'
import { memo,useMemo} from 'react';

const ContadorHijo = ({contador,sumar,restar}) => {
    //let suNumero = 0; for (let i=0;i<1000000;i++){suNumero++;}
    // vacio porque no es una propiedad de estado
    const suNumero = useMemo(()=> {
        let Numero = 0; 
        for (let i=0;i<1000000;i++)
        {Numero++;}
        // Memoriza un valor calculado
        return Numero;
    },[])
    //useCallback memoriza funciones puras
    console.log("Hijo Contador se renderiza");
    return (
        <div style={{border:"thin solid #000",margin:"1rem",
        padding:"1rem"}}>
            <h2>Hijo del Contador</h2>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{suNumero}</h3>
        </div>
    )
}
// Pasar el componente que se quiera memorizar
export default memo(ContadorHijo);