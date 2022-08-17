//*traemos react desde "react", siempre es el primer paso 
import React from 'react'; 


import ReactDOM from 'react-dom/client'; //** ReactDOM, es la libreria que nos permite renderizar nuestra app React en el DOM */
// import './index.css';
import App from './App'; // export default

// import {otra} from "./App" => export nombrado

// import reportWebVitals from './reportWebVitals';
// import "./index.css"



//**PUNTO DE ENTRADA, DESDE EL INDEX 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />
  );
//* Render es el metodo que nos permite empezar a renderizar nuestra aplicacion
// **! La forma de invocar una funcion es con <Nombre />

// reportWebVitals();
