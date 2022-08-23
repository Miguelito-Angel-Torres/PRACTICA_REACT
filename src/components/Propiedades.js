import React from 'react';
import PropTypes from 'prop-types';
export default function Propiedades(props) {
    var variable = props.numero
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{variable}</li>
                <li>{props.booleano?"Verdadero":"False"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre + "  " +  props.objeto.correo}</li>
                <li>{props.propiedadElementReact}</li>
                <li>{props.arreglo.map(props.Function).join(" ")}</li>
                <li>{props.componenteReact}</li>
                
            </ul>
        </div>
        // Instalacion npm i -S prop-types paquete permite definir tipo de valor que sea fijo
    )
}
// Definir Propiedades por Defectos
Propiedades.defaultProps = {
    porDefecto:"Las Props",
};

Propiedades.propTypes = {
    numero:PropTypes.number.isRequired,
    cadena:PropTypes.string.isRequired,
    booleano:PropTypes.bool.isRequired,
}

