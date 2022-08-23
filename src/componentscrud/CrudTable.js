import React from 'react'
import CrudTableRow from './CrudTableRow'

function CrudTable({data,DeleteData,setDataToEdit}) {
  return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Especialidad</th>
                    <th>Constelación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0?
                data.map((el) => <CrudTableRow key={el.id}
                el= {el} 
                setDataToEdit={setDataToEdit} DeleteData={DeleteData} />)
                :<tr><td colSpan="3">Sin Datos</td></tr>
                
                }   
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable