import {useState} from 'react'
import { helpHttp } from '../helpers/helpHttp';
// Logica:
export const useForm = (initailForm,validationsForm) => {
    const [form,setForm] = useState(initailForm);
    const [errors,setErrors] = useState({});
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState(null);

    // declarar las variables
    // Cambio de Valores de la propiedad: Como una actualizacion de la propiedad
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value,})};
    
    //Lanzar las Validaciones
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(
            validationsForm(form),
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validationsForm(form))
        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario")
            setLoading(true);
            helpHttp()
                .post("https://formsubmit.co/ajax/mallquitorres1234@gmail.com",{
                    body:form,
                    headers:{
                        "content-type": "application/json",
                        Accept:"application/json",
                    },
                })
                .then(res=>{
                    console.log(res);
                    setLoading(false);
                    setResponse(true);
                    setForm(initailForm);
                    setTimeout(() =>{
                        setResponse(false);
                    },5000)
                })
        }else{return}


    };

    return {
        form: form,
        errors:errors,
        loading: loading,
        response: response,
        handleChange: handleChange,
        handleBlur: handleBlur,
        handleSubmit: handleSubmit,
    }

};

//https://www.youtube.com/watch?v=tClPVJt6RB8&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=48
