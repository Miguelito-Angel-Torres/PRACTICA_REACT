import React,{useState} from 'react';

/*export default function Formulario({Titulo}){
    const [nombre,setNombre] = useState("");
    const [favorito,setFavorito] = useState("");
    const [lenguaje,setLenguaje] = useState("");
    const [terminos,setTerminos] = useState(false);
    // onChange para el manejo de cambio el evento
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e )
        alert("El Formulario se ha enviado")
    }

    // Evento onSubmit
    return(
        <>
            <h2>{Titulo}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Nombre" name="nombre" value={nombre}
                onChange={(e) =>{
                    setNombre(e.target.value);
                    console.log(e.target.name)
                }}
                 />
                <p>Elige tu JS Favorito</p>
                <input type="radio" id="vanilla" name="Favorito" value="vanilla"
                onChange={(e) =>{
                    setFavorito(e.target.value);
                }
                }
                defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="react" name="Favorito" value="react"
                onChange={(e) =>{
                    setFavorito(e.target.value);
                }}
                />
                <label htmlFor="react">React</label>
                <input type="radio" id="angular" name="Favorito" value="angular"
                onChange={(e) =>{
                    setFavorito(e.target.value);
                }}
                />
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="vue" name="Favorito" value="vue"
                onChange={(e) =>{
                    setFavorito(e.target.value);
                }}
                />
                <label htmlFor="vue">Vue</label>
                <br/>
                <label htmlFor="lenguaje">Elige tu lenguaje de programacion favorito</label><br/>
                <select name="lenguaje" id="lenguaje" 
                onChange={(e) =>{
                    setLenguaje(e.target.value);}} defaultValue="">
                    <option value="" >----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select >
                <br/>
                <hr/>
                <label htmlFor="terminos">Aceptos Terminos</label>
                <br/>
                <input type="checkbox" id="terminos" name="terminos"
                    onChange={(e) => setTerminos(e.target.checked,console.log(e))}
                      
                />
                <input type="submit"/>
                    
                


            </form>
        </>
    )
}*/
// Version Avanzada
export default function Formulario({Titulo}){
    const [form,setForm] = useState({});
    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });console.log(form);
        
    };

    const handleCheckend = e =>{
        setForm({
            // ...form para hacer una mezcla lo que tiene el formulario + el valor de la propiedad
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    



    // onChange para el manejo de cambio el evento
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e )
        alert("El Formulario se ha enviado")
    }

    // Evento onSubmit
    return(
        <>
            <h2>{Titulo}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Nombre" name="nombre" value={form.nombre}
                onChange={handleChange}
                 />
                <p>Elige tu JS Favorito</p>
                <input type="radio" id="vanilla" name="Favorito" value="vanilla"
                onChange={handleChange}
                defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="react" name="Favorito" value="react"
                onChange={handleChange}
                />
                <label htmlFor="react">React</label>
                <input type="radio" id="angular" name="Favorito" value="angular"
                onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="vue" name="Favorito" value="vue"
                onChange={handleChange}
                />
                <label htmlFor="vue">Vue</label>
                <br/>
                <label htmlFor="lenguaje">Elige tu lenguaje de programacion favorito</label><br/>
                <select name="lenguaje" id="lenguaje" 
                onChange={handleChange} defaultValue="">
                    <option value="" >----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select >
                <br/>
                <hr/>
                <label htmlFor="terminos">Aceptos Terminos</label>
                <br/>
                <input type="checkbox" id="terminos" name="terminos"
                    onChange={handleCheckend}
                      
                />
                <input type="submit"/>
                    
                


            </form>
        </>
    )
}


Formulario.defaultProps = {
    Titulo:"Formularios"
}

