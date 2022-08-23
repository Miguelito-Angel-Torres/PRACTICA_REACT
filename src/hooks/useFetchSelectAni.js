import {useState,useEffect} from 'react';


export const useFetchSelectAni = (url) => {
  // 3 Variables
  const [data,setData] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    //Abortar la peticion fetch
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    const fetchData =async () =>{
      setLoading(true);

      try {
        const res = await fetch(url)
        console.log(res);
        if(!res.ok){
          let err = new Error("Error en la Peticion Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          throw err;
        }
        const json = await res.json();
        // indica que no hubo error
        if(!signal.aborted){
          setData(json);
          setError(null);
        }
      } catch (error) {
        if(!signal.aborted){
          setData(null);
          setError(error);
        }
      }finally{
        if(!signal.aborted){
          setLoading(false);
        }
      }

    };
    fetchData();
    //Con el soporte del abortController
    return () => abortController.abort();

  },[url])

  return {data:data,
          error:error,
          loading:loading}
}
//https://www.youtube.com/watch?v=B4BBH3sbGoY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=43

//4bcabd7a-4321-4842-b74e-16f0d792263c roken
//https://api.copomex.com/panel/proyectos/detalles/4bcabd7a-4321-4842-b74e-16f0d792263c
//https://api.copomex.com/documentacion/inicio