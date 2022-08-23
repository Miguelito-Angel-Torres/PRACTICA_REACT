import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
// Creacion del Componente Topic 
const Topic = () =>{
  //Parametros
  let {topic} = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>El topic</p>
    </div>)}



export const ReactTopics = () => {
  let match = useRouteMatch();
    console.log(match);
  // path : nos permite construir rutas relativas <Route>,mientras que 
  // url nos permite construir enlaces relativos <Link> o <NavLink>
  let {path,url} = useRouteMatch();


  return (
    <div>
        <h2>Temas React</h2>
        <ul>
          <li><Link to={`${url}/jsx`}>JSX</Link></li>
          <li><Link to={`${url}/props`}>Props</Link></li>
          <li><Link to={`${url}/estado`}>Estads</Link></li>
          <li><Link to={`${url}/componentes`}>Components</Link></li>
        </ul>
        <Switch>
           {/* Definicion de Sub Rutas*/}
          <Route exact path={path}>
            <h4>Elige un Tema de React</h4>
            <p>Route de React:(ReactTopics)</p>
          </Route>
          <Route path={`${path}/:topic`} component={Topic}/>
        </Switch>
    </div>
  )
}
