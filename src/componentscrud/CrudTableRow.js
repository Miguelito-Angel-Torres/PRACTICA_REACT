import React from 'react'
import { useHistory } from 'react-router-dom';

const CrudTableRow = ({el,setDataToEdit,DeleteData}) => {
  let history = useHistory()
  //Desestructuración
  let {name,constellation,id} = el;
  const handleEdit = () =>{
    setDataToEdit(el);
    history.push(`/editar/${id}`)

  }

  const handleEliminar = () =>{
    DeleteData(id);
  }

  return (
    <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td><button onClick={handleEdit}>Editar</button>||
        <button onClick={handleEliminar}>Eliminar</button></td>
    </tr>
  )
}

export default CrudTableRow