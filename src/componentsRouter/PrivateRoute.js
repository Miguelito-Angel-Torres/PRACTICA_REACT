import React from 'react'
import { Redirect, Route } from 'react-router-dom'

/*const PrivateRoute = (props) => {
  return <Route exact = {props.exact} path={props.path}
  component={props.component} />};*/

/*const PrivateRoute = (props) => {
    return <Route {...props}/>};*/

//Simular la Autenticacion
let auth;

auth = true;
auth = null;

console.log(auth);
/* :Component es un alias que le asigno a Component*/ 
const PrivateRoute = ({component:Component,...rest}) => {
    return( <Route {...rest}>
        {auth ? <Component />:<Redirect to="/login"/>}
    </Route>);
};

export default PrivateRoute

//https://www.youtube.com/watch?v=ZeAOeMmDukU&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=62