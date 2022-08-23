import React from 'react';


/*export default class Hijo extends Component {
    render() {
        return(
            <h2>Componente Hijo</h2>
        )
    }

}*/

function Hijo(props) {
    return(
        <>
         <h3>{props.mensaje}</h3>
         <button onClick={props.Contador}>+</button>
        </>

    )
}
export default Hijo;