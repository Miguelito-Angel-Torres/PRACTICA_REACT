import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

// Siempre poner la estructura del objeto de mi propiedad para comenzar
const initailForm = {
    name:"",
    constellation:"",
    id:null
}

function CrudForm({createData,updateData,dataToEdit,setDataToEdit}) {
    const [form,setForm] = useState(initailForm);
    // Variable History
    let history = useHistory()
    console.log(history)



    //function Effect: Effect de Actualizacion de Variable
    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit);
            //console.log(form)
        }else{
            setForm(initailForm);
        }
    },[dataToEdit]) 

    const handleChange =(e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit=(e) => {
        // JavaSCRIPT PARA QUE NO SE auto PROCESE EL FORMULARIO
        e.preventDefault();
        if(!form.name || !form.constellation){
            alert("Datos incompletos")
            return;}
        if(form.id === null){
            createData(form);
        }else{
            updateData(form);          
        }
        handleReset()
        
    };


    const handleReset=(e) => {
        setForm(initailForm);
        //
        setDataToEdit(null)
        //Para regresar a la url principal
        history.push("/")
    }

  return (
    <div>
        <h3>{dataToEdit? "Editar":"Agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Especialidad"
            onChange={handleChange}
            value = {form.name} 
            />
            <input type="text" name="constellation" placeholder="Constelación"
            onChange={handleChange}
            value = {form.constellation}
            />
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm