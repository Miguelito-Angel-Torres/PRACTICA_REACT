//import React from 'react'
import "./Modal.css";
import ReactDOM from 'react-dom';
// children es una propiedad especial que hace referencia al contenido intero que va tener ese componente
// className dinamico
const ModalPortal = ({children,isOpen,closeModal}) => {
  const handleModalContainerClick = (e) =>{
    //Detenemos 
    e.stopPropagation();

  }
  return ReactDOM.createPortal(
    <article className={`moda ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button onClick={closeModal} className="modal-close">X</button>
            {children}
        </div>
    </article>,
    document.getElementById('modal')
  );
};

export default ModalPortal;

//https://www.youtube.com/watch?v=nRWk8pAN74c&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=52