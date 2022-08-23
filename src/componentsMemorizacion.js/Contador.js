import {useState,useCallback} from 'react'
import ContadorHijo from './ContadorHijo'

const Contador = () => {
    // Cada que se actualiza el estado contador padre el hijo se renderiza
    const [contador,SetContador] = useState(0)
    const [input,SetInput] = useState("")

    //const sumar = () =>{SetContador(contador + 1)}
    const sumar = useCallback(() => {SetContador(contador + 1)},[contador]);
    //const restar = () =>{ SetContador(contador - 1)}
    const restar = useCallback(() => {SetContador(contador - 1)},[contador]);
    
    const handleInput = (e) => SetInput(e.target.value);
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Contador</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
            <input type="text" onChange={handleInput} value = {input}/>
            
            <ContadorHijo contador ={contador} sumar={sumar} restar={restar}/>
        </div>
    )
}

export default Contador

