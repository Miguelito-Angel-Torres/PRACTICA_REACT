import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function MenuConceptos() {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces html(no recomendado)</span><br/>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link</span><br/>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink</span><br/>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/acerca" activeClassName="active">Acerca</NavLink>
          <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink>
          <NavLink exact to="no-existe" activeClassName="active">Error 404</NavLink>
        </li>
        <li>
          <span>Parametros:</span><br/>
          <Link to="/usuario/miguel">miguel</Link>
          <Link to="/usuario/angel">angel</Link>
        </li>
        <li>
          <span>Parametros de consulta:</span><br/>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones:</span><br/>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas:</span><br/>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas:</span><br/>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos