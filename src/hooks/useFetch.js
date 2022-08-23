import { useState,useEffect } from "react";
// Function para reutilizar 
export const useFetch =(url)=>{
    // Utilizacion de 3 variables 
    const [data,SetData] = useState(null)
    const [isPending,SetPending] = useState(true)
    const [variableError,SetError] = useState(null)
    // Se va ejecutar cuando cambia la url
    useEffect(()=>{
        const getData = async (url) => {
            try {
                let res = await fetch(url);     
                //Validacion para el error
                if(!res.ok){
                    // throw es el return de los errores
                    throw{
                        err:true,
                        status:res.status,
                        statusText: !res.statusText?"Ocurrio un Error": res.status.text
                    }
                }else{
                    let data = await res.json();
                    SetPending(false);
                    SetData(data);
                    SetError({err:false})
                }
            } catch (err) {
                SetPending(true);
                SetError(err);


            }
   
        } 
        getData(url)
    },[url]);
    // Return ojeto
    return {data,isPending,variableError}

};