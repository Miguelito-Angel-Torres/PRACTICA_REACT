import React from 'react'
import ContactForm from '../componentsform/ContactForm'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import SongSearch from '../componentsbuscadormusic/SongSearch'
import ModalPortal from './ModalPortal'

const Modals = () => {
    // Por cada Modal estructuración
    const [isOpenModal1,openMdal1,closeModal1] =useModal(false)
    const [isOpenModal2,openMdal2,closeModal2] =useModal(false)
    const [isOpenModalContac,openMdalContac,closeModalContac] =useModal(false)
    const [isOpenSong,openMdalSong,closeModalSong] =useModal(false)
    //Portal
    const [isOpenModalPortal,openModalPortal,closeModalPortal] =useModal(false)
    return (
        <div>
            <h2>Modales</h2>
            <button onClick = {openMdal1}>Modal1</button>
            <Modal isOpen = {isOpenModal1} closeModal = {closeModal1}>
                <h3>Modal 1 </h3>
                <p>Hola es el conte Modal 1</p>
                <img src="https://placeimg.com/400/400/animals"
                alt = "Animals"/>
            </Modal>
            <button  onClick = {openMdal2}>Modal2</button>
            <Modal isOpen = {isOpenModal2} closeModal = {closeModal2}>
                <h3>Otro Modal </h3>
                <p>Otro Modal</p>
                <img src="https://placeimg.com/400/400/nature"
                alt = "Nature"/>
            </Modal>
            <button  onClick = {openMdalContac}>Modal Contacto</button>
            <Modal isOpen={isOpenModalContac} closeModal = {closeModalContac}>
                <ContactForm/>
            </Modal>
            <button  onClick = {openMdalSong}>Modal Song</button>
            <Modal isOpen={isOpenSong} closeModal = {closeModalSong}>
                <SongSearch/>
            </Modal>
            <button  onClick = {openModalPortal}>ModalPortal</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal = {closeModalPortal}>
                <h3>Modal en Portal </h3>
                <p>Este el contenido de un modal que carga en otro nodo del DOM
                    diferente a donde carga nuestra app de React,gracias a los Portales.
                </p>
                <img src="https://placeimg.com/400/400/tech"
                alt = "Nature"/>
            </ModalPortal>
        </div>
    )
}

export default Modals

//https://www.youtube.com/watch?v=HVYzAf2DMAs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=51