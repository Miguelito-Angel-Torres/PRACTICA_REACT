import React from 'react'
//  import logo from './logo.svg';
import Componentes from './components/Componentes';
import Propiedades from './components/Propiedades';
/*import './App.css';*/
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventoES6,EventoES7,MasSobreEvento} from './components/Eventos';
import { Padre } from './components/ComunicacionComponente';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizado from './components/HooksPersonalizado';
import Referencias from './components/Referencias';
import Formulario from './components/Formulario';
import Estilos from './components/Estilos';
import ComponentesEstiblizados from './components/ComponentesEstilizados';
import Bootstrap from './components/Bootstrap';
import Bulma from './components/Bulma';
import ReactBootstrap from './components/ReactBootstrap';
import MaterialUi from './components/MaterialUI';
import CrudApp from './componentscrud/CrudApp';
import CrudApi from './componentscrudapi/CrudApi';
import SongSearch from './componentsbuscadormusic/SongSearch';
import SelectsAnidados from './componentsselectanidadas/SelectsAnidados';
import ContactForm from './componentsform/ContactForm';
import Modals from './componentsVentaModals/Modals';
import ConceptosBasicos from './componentsRouter/ConceptosBasicos';
import Contador from './componentsMemorizacion.js/Contador';

// # = HashRouter permite acceder enlaces internos

function App0() {
  let variable = "Componente Windows"
  return (
    <div className="App">
      <header className="App-header"> 
        <section>
          <Componentes variable = {variable}/>
          <hr/>
          <Propiedades cadena = "Cadena Texto" numero ={19}
          booleano = {true}
          arreglo = {[1,2,3]}
          objeto ={{nombre:"Lu",correo:"miguel@gmail.com"}}
          propiedadElementReact = {<p>Este es un Elemento</p>}
          Function = {(num) => num*num}
          componenteReact = {<Componentes variable = {variable}/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventoES6/>
          <hr/>
          <EventoES7/>
          <hr/>
          <MasSobreEvento/>
          <hr/>
          <Padre/>
          <hr/>
          <CicloVida/>
          <hr/>
          <AjaxApis/>
          <hr/>
          <ContadorHooks mensaje="React 123"/>
          <hr/>
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizado/>
          <hr/>
          <Referencias/>
          <hr/>
          <Formulario/>
          <hr/>
          <Estilos/>
          <hr/>
          <ComponentesEstiblizados/>
        </section>

      </header>
    
    </div>
  );
}
function App1(){
  return(
    <div>
      <h1>Frameworks CSS con React</h1>
      {/*<Bootstrap/>*/}
      {/*<Bulma/>*/}
      {/*<ReactBootstrap/>*/}
      <MaterialUi/>
    </div>
  )
}

function App4() {
  return(
    <>
      <h1>Ejercicio React</h1>
      <hr/>
      <Modals/>
      <hr/>
      <ContactForm/>
      <hr/>
      <SelectsAnidados/>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </>

  )
}


function App8() {
  return(
    /* Lo que esta afuera del Route siempre va estar disponible(visible) */
   <div>
      <h1>React Router</h1>
      <a href="https://v5.reactrouter.com/web/guides/quick-start"
      target="_blank"
      rel="noreferrer">Documentacion</a>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <ConceptosBasicos/>
   </div>

  )
}

function App() {
  return(
    /* Lo que esta afuera del Route siempre va estar disponible(visible) */
   <div>
      <h1>React Memorización</h1>
      <hr/>
      <h2>Teoria</h2>
      <h3>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo" target="_blank" rel="noreferrer">memo</a>
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>Lo vuelve a memorizar al momento de que sus props cambian.</li>
        <li>Evitar re-renderizados</li>
        <li>Hay que evitarlo en la medida de lo posible, pues podria ser mas
          costosa la tarea de memorizacion que el re-renderizado del componente
        </li>
        <li>
            Usalo,cuando:
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos del APIS</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
        </li>
      </ul>
      <hr/>
      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback" target="_blank" rel="noreferrer">useCallback</a>
      </h3>
      <ul>
        <li>Memoriza una funcion,para no volverla a definir en cada render</li>
        <li>Usado siempre que se pase una funcion como <b>prop</b> a un componente memorizado</li>
        <li>Usalo siempre que se pase una funcion como parametro de un efecto</li>
      </ul>
      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo" target="_blank" rel="noreferrer">useMemo</a>
      </h3>
      <ul>
        <li>Memoriza un valor calculado,es decir, el resultado de una function</li>
        <li>Genera propiedades computadas</li>
        <li>Usalo en procesos pesados</li>
      </ul>
      <Contador/>
      <hr/>
   </div>

  )
}

export default App;

//npm install -g json-server descargar json en manera global

//https://www.youtube.com/watch?v=TDGzE1BrV5A&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=32


//pRIMERO VER ESO SOLO VER
//https://www.youtube.com/watch?v=g0IZP95Mc18&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=113


