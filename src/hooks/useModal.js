import {useState} from 'react';

export const useModal = (initailValue = false) => {
  const [isOpen,setIsOpen] = useState(initailValue);
    // true para abrir el Modal
  const openModal = () =>{
    setIsOpen(true);}
    // false para cerrar el Modal
  const closeModal = () =>{
    setIsOpen(false);
  }
  return [isOpen,openModal,closeModal];
}
