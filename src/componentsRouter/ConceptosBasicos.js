import React from 'react'
import {BrowserRouter as Router, HashRouter, Link, Redirect, Route , Switch } from 'react-router-dom';
import MenuConceptos from './MenuConceptos';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Productos from './pages/Productos';
import { ReactTopics } from './pages/ReactTopics';
import Usuario from './pages/Usuario';
import PrivateRoute from './PrivateRoute';
// npm run build : Hace un compilado al proyecto , hace las rutas amigable para no darl 404
// hashRouter en la url te evita error 404  cuando busca con el url
const ConceptosBasicos = () => {
    return (
      <div>
         
          <h2>HashRouter</h2>
          <HashRouter>
            <MenuConceptos/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  exact path="/acerca" component={Acerca}/>
                <Route exact path="/contacto" component={Contacto}/>
                {/* :username : Pasar parametros */}
                <Route exact path="/usuario/:username" component={Usuario}/>
                <Route exact path="/productos" component={Productos}/>
                {/* Redirecciones : Redirect se redlirecciona a las rutas asignadas */}
                <Route exact path="/about"><Redirect to = "/acerca"/></Route>
                <Route exact path="/contact"><Redirect to= "/contacto"/></Route>
                <Route path="/react" component={ReactTopics}/>
                <Route exact path="/login" component={Login}/>
                {/*<Route exact path="/dashboard" component={Dashboard}/>*/}
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <Route path="*" component={Error404}/>
            </Switch>
          </HashRouter>
          <hr/>
          <h2>Conceptos Basicos</h2>
          <Router>
            <MenuConceptos/>
              {/* Aca se define las rutas */}
              {/* / = raiz del servidor(http://localhost:3001/) */}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  exact path="/acerca" component={Acerca}/>
                <Route exact path="/contacto" component={Contacto}/>
                {/* :username : Pasar parametros */}
                <Route exact path="/usuario/:username" component={Usuario}/>
                <Route exact path="/productos" component={Productos}/>
                {/* Redirecciones : Redirect se redlirecciona a las rutas asignadas */}
                <Route exact path="/about"><Redirect to = "/acerca"/></Route>
                <Route exact path="/contact"><Redirect to= "/contacto"/></Route>
                <Route path="/react" component={ReactTopics}/>
                <Route exact path="/login" component={Login}/>
                {/*<Route exact path="/dashboard" component={Dashboard}/>*/}
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <Route path="*" component={Error404}/>
            </Switch>
          </Router> 
      </div>
    )
  }


/*const ConceptosBasicos = () => {
  return (
    <div>
        <h2>Conceptos Basicos</h2>
        <Router>
            { Aca se define las rutas }
            { / = raiz del servidor(http://localhost:3001/) }
            <Switch>
                <Route exact path="/">
                    <h2>Home</h2>
                    <p>Bienvenido Tema</p>
                </Route>
                <Route  exact path="/acerca">
                    <Acerca/>
                    <p>Sobre Acerca</p>
                </Route>
                {Formas para realizar el Route}
                {<Route exact path="/contacto" component={Contacto}/>}
                <Route exact path="/contacto" children={<><Contacto />
                <p>Children</p></>}/>
            </Switch>
        </Router>
    </div>)}*/

export default ConceptosBasicos;

//https://v5.reactrouter.com/web/guides/quick-start
//https://reactrouter.com/docs/en/v6/getting-started/overview
//https://www.youtube.com/watch?v=qIz35CdhVOY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=64