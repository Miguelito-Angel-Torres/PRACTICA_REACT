import React, { useState } from 'react';
import SelectList from './SelectList'

const SelectsAnidados = () => {
  const [state,setState] = useState("");
  const [town,setTown] = useState("");
  const [suburb,setSuburb] = useState("");

  const TOKEN = "4bcabd7a-4321-4842-b74e-16f0d792263c"

  return (
    <div>
        <h2>SelectsAnidados</h2>
        <h3>Un Pais</h3>
        <SelectList title="estado" 
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e)=>{setState(
          e.target.value
        )}}/>
        {state && <SelectList title="municipios" 
        url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e)=>{setTown(
          e.target.value)}}/>}
        {town && <SelectList title="colonia" 
        url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e)=>{setSuburb( 
          e.target.value)}}/> }
        <pre>
          <code>
            {state} - {town} - {suburb}
          </code>
        </pre>
    </div>
  )
}

export default SelectsAnidados

//https://www.youtube.com/watch?v=l6S90ah48kk&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=42