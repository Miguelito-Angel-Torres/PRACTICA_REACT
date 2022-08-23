import React, { useState,useEffect } from 'react';
import { HashRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import CrudForm from '../componentscrud/CrudForm';
import CrudTable from '../componentscrud/CrudTable';
import Error404 from '../componentsRouter/pages/Error404';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';


const CrudApi = () => {
    const [db,setDb] = useState(null)
    const [dataToEdit,setDataToEdit]=useState(null);

    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //Creacion de UseEffect para que la variable tenga el json 
    //Cuando esta vacio indica que va ejecutar una vez antes del render
    let api = helpHttp();
    let url = "http://localhost:5000/vicios";
    
    useEffect(()=>{
        setLoading(true);
        api.get(url).then(res=>{
            //console.log(res);
            if(!res.err){
                setDb(res)
                setError(null)
            }else{
                setDb(null)
                setError(res);   
            }
            setLoading(false);
        })
    },[url])

    //Actualizacion CRUD:
    const createData = (data) =>{
        // Agregacion de Data
        // Agregacion del Objeto al Array
        //setDb(...db,data)
        data.id = Date.now()
        //console.log(data)
        let options = {
            body:data,
            headers:{"content-type":"application/json"}
        };

        api.post(url,options).then(res=>{
            console.log(res);
            if(!res.err){
                setDb([...db,res])
            }else{
                setError(res);
            }
        })

    }

    const updateData = (data) =>{
        let endpoint = `${url}/${data.id}`
        //console.log(endpoint)

        let options = {
            body:data,
            headers:{"content-type":"application/json"}
        };

        api.put(endpoint,options).then(res=>{
            console.log(res);
            if(!res.err){
                let newData = db.map((el)=> el.id === data.id?data:el);
                setDb(newData)
            }else{
                setError(res);
            }
        })

        
        //let newData = db.map((el)=> el.id === data.id?data:el);
        //setDb(newData);
    }


    const DeleteData = (id) =>{
        let isDelete = window.confirm(`¿Estas Seguro de Eliminar el registro con el id '${id}'?`)
        if(isDelete){
            let endpoint = `${url}/${id}`
            let options = {
                headers:{"content-type":"application/json"}
            };

            api.del(endpoint,options).then(res=>{
                //console.log(res);
                if(!res.err){
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData)                      
                }else{
                    setError(res);
                }
            })
        }else{return;}

        /*let isDelete = window.confirm(`¿Estas Seguro de Eliminar el registro con el id '${id}'?`)
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        }else{return;}*/
    }
  return (  
    <div>
        <HashRouter basename="vicios">
            <header>
                <h2>CRUD API con Rutas</h2>
                <nav>
                    <NavLink to="/" activeClassName="active">Vicios</NavLink>
                    <NavLink to="/agregar" activeClassName="active">Agregar</NavLink>
                </nav>
            </header>
            <Switch>
                <Route exact path="/">
                {loading && <Loader/> }
                {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/> }
                {db && <CrudTable data={db} DeleteData={DeleteData} 
                setDataToEdit={setDataToEdit}/>}
                </Route>
                <Route exact path="/agregar">
                    <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}/>
                </Route>
                <Route exact path="/editar/:id">
                    <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}/>
                </Route>
                <Route exact path="/eliminar/:id">
                    <h2>Eliminar de Vicios</h2>
                </Route>
                <Route path="*" children={<Error404/>}></Route>
            </Switch>
        </HashRouter>
        {/*<article className="grid-1-2"></article>*/}
        
    </div>
  )
}

export default CrudApi

//https://loading.io/css/ (Para Loader  )

//https://www.youtube.com/watch?v=KnncoyOGNqU&t=38s