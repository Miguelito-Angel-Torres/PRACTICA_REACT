import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
// Variable Array
const initialDb = [
    {
        id:1,
        name:"Hierbero",
        constellation:"Marihuana"
    },
    {
        id:2,
        name:"Alcoholico",
        constellation:"Cerveza"
    },
    {
        id:3,
        name:"Cocainero",
        constellation:"Pasta"
    }
] 

const CrudApp = () => {
    const [db,setDb] = useState(initialDb)
    const [dataToEdit,setDataToEdit]=useState(null);
    //Actualizacion CRUD:
    const createData = (data) =>{
        // Agregacion de Data
        // Agregacion del Objeto al Array
        //setDb(...db,data)
        data.id = Date.now()
        //console.log(data)
        setDb([...db,data])
    }

    const updateData = (data) =>{
        let newData = db.map((el)=> el.id === data.id?data:el);
        setDb(newData);
    }


    const DeleteData = (id) =>{
        let isDelete = window.confirm(`¿Estas Seguro de Eliminar el registro con el id '${id}'?`)
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        }else{return;}



        //let deleteData = db.map((el)=> el.id === id?)
        /*if(db.id === id){
            
        }else{

        }
        setDb(deleteData)*/

    }
  return (  
    <div>
        <h2>CRUD APP</h2>
        <article className="grid-1-2">
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} DeleteData={DeleteData} setDataToEdit={setDataToEdit}/>
        </article>
        
    </div>
  )
}

export default CrudApp

//https://www.youtube.com/watch?v=22NhOYhr-LY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=30