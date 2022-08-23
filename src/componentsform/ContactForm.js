import React from 'react'
import Loader from '../componentscrudapi/Loader';
import Message from '../componentscrudapi/Message';
import { useForm } from '../hooks/useForm'

const initailForm = {
    name:"",
    email:"",
    subject:"",
    comments:"",
};

const validationsForm = (form) =>{
    //Validaciones
    let errors = {};
    // Expresiones Regulares;
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letra y espacios en blanco";}
    
    if(!form.email.trim()){ 
        errors.email = "El campo 'Email' es requerido"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email'es incorrecto";
    }
    if(!form.subject.trim()){
        errors.subject = "El campo 'Subjectivo' es requerido"}

    if(!form.comments.trim()){
        errors.comments = "El campo 'Comentario' es requerido"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentario' no debe exceder a los 255 caracteres"
    }
    
    console.log(errors);
    return errors;

};

let styles = {
    fontWeight:"bold",
    color:"#dc3545"
}

const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,} = useForm(initailForm,validationsForm);
    // onBlur : Validaciones cuando pierde el focus del input
    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder="Escribe tu Nombre"
                onBlur={handleBlur}
                onChange = {handleChange} value={form.name} required/>
                {errors.name && <p style={styles}>{errors.name}</p>}
                 <input type="email" name="email" placeholder="Escribe tu Email"
                onBlur={handleBlur}
                onChange = {handleChange} value={form.email} required/>
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input type="text" name="subject" placeholder="Asunto a Tratar"
                onBlur={handleBlur}
                onChange = {handleChange} value={form.subject} required/>
                {errors.subject && <p style={styles}>{errors.subject}</p>}
                <textarea name="comments"  cols="50" rows="5" placeholder="Escribe Comentario"
                onBlur={handleBlur}
                onChange = {handleChange} value={form.comments} required
                ></textarea>
                 {errors.comments && <p style={styles}>{errors.comments}</p>}
                <input type="submit" value= "Enviar"></input>
            </form>
            {loading && <Loader/>}
            {response && <Message msg="Los datos Enviados" bgColor="#198754"/>}
        </div>
    )
}

export default ContactForm

//https://formsubmit.co/