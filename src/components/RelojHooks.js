import React,{useState,useEffect} from 'react';
function Reloj({hora}) {return(<h3>{hora}</h3>)}

export default function RelojHooks(props){
    const [Hora,setHora] = useState(new Date().toLocaleTimeString());
    const [Visible,setVisible] = useState(false);

    /*const tictac = (valor) =>{
        setVisible(valor);}*/
    useEffect(()=>{
        let temporizador;
        if(Visible) {
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString());
            }, 1000)
            console.log(temporizador)
        }else{
            clearInterval(temporizador);    
        }
        return () =>{
            console.log("Fase de Desmpntaje Reloj");clearInterval(temporizador)
        }
    },[Visible])
    

    return(
        <> 
            <h2>{props.titulo}</h2>
            {Visible && <Reloj hora={Hora}/>}
                <button onClick={()=>setVisible(true)}>Iniciar</button>
                <button onClick={()=>setVisible(false)}>Detener</button>

        </>
    )

}

RelojHooks.defaultProps = {
    titulo :"Reloj de Hooks"
}