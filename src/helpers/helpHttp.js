    export const helpHttp = () =>{
    const PeticionFetch = (endpoint,options)=>{
        const defaultHeader = {
            accept:"application/json"
        };
        // Sirve para abortar la peticion si no se encuentra
        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.header = options.header?{...defaultHeader}:defaultHeader;
        // Propiedad para mandar datos
        // Para convertir en cadena 
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;


        console.log(options);

        setTimeout(()=>{
            controller.abort();
        },3000);    

        return fetch(endpoint,options)
            .then((res)=> res.ok
                        ?res.json():
                        Promise.reject({
                                err:true,
                                status:res.status || "00",
                                statusText:res.statusText || "Ocurrio un Error"}))
        .catch((err)=>err)
    };


    const get= (url,options = {})=> PeticionFetch(url,options);

    const post= (url,options = {})=>{
        options.method = "POST";
        return PeticionFetch(url,options)

    };

    const put= (url,options = {})=>{
        options.method = "PUT";
        return PeticionFetch(url,options)
    };
    
    const del= (url,options = {})=>{
        options.method = "DELETE";
        return PeticionFetch(url,options)
    };

    return{
        get:get,
        post:post,
        put:put,
        del:del
    }
}
//https://www.youtube.com/watch?v=miUHXjmhTEQ&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=33