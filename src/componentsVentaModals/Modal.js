import React from 'react'
import "./Modal.css";
// children es una propiedad especial que hace referencia al contenido intero que va tener ese componente
// className dinamico
const Modal = ({children,isOpen,closeModal}) => {
  const handleModalContainerClick = (e) =>{
    //Detenemos 
    e.stopPropagation();

  }
  return (
    <article className={`moda ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button onClick={closeModal} className="modal-close">X</button>
            {children}
        </div>
    </article>
  )
}

export default Modal

//https://www.youtube.com/watch?v=nRWk8pAN74c&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=52