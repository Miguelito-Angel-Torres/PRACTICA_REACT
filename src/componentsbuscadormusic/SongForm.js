import React,{useState} from 'react'
const initailForm = {
    artist: "",
    song:"",
}


export const SongForm = ({handleSearch,handleSaveSong}) => {
    // Variable de Controlador de Estado
    const [form,setForm] = useState(initailForm)
    //Variable de Habilitacion
    const [isDisable,setIsDisable] = useState(true);

    const handleChange = (e) =>{
        setForm({
                ...form,
                [e.target.name]: e.target.value,
            })}
    const handleSubmit = (e) => {
        //Funcion para prevenir el envio del formulario
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos");
            setIsDisable(true);
            return;
        }
        handleSearch(form);
        setForm(initailForm);

        setIsDisable(false);
    }
        
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type= "text" name="artist" placeholder="Nombre del Artista"
            onChange={handleChange} value={form.artist}/>
            <input type= "text" name="song" placeholder="Nombre de la Musica"
            onChange={handleChange} value={form.song}/>
            <input type="submit" value="Enviar"></input>
            <input type="button" onClick={handleSaveSong} value ="Agregar Cancion"
            disabled = {isDisable && "disabled"}></input>
        </form>
    </div>
  )
}
