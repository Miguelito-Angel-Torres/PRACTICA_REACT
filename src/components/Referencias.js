import React,{createRef,useRef} from "react"

export default function Referencias({mensaje}){
    let refMenu = useRef();
    let refMenuBtn = useRef();
    // Crear referencia (useRef() indica que estoy usando la referencua en function)
    



    const handleToggleMenu = (e) =>{

        console.log(refMenu)
        //console.log(refMenu,refMenuBtn);
        /*const $menu = document.getElementById('menu')
        //e.target es el objeto que origeno el evento(botton)
        //console.log($menu)
        if(e.target.textContent == "Menú"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block"
        }else{
            e.target.textContent = "Menú";
            $menu.style.display = "none"
        }*/
        if(refMenuBtn.current.textContent == "Menú"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block"
        }else{
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display= "none"
        }
    }

    return(
        <>
            <h2>{mensaje}</h2>
            <button id= "btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu"  ref={refMenu}  style={{display:"none"}}>
                <a href="#">Seccion1</a><br/>
                <a href="#">Seccion2</a><br/>
                <a href="#">Seccion3</a><br/>
                <a href="#">Seccion4</a><br/>
                <a href="#">Seccion5</a><br/>
            </nav>
        </>
    )
}

Referencias.defaultProps = {
    mensaje:"Referencias"
}

//https://www.youtube.com/watch?v=ECWR2ohHWKc&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=22