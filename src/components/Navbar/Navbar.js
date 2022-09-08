import React from 'react'
// import Boton from '../Boton/Boton'
import {CartWidget} from './CartWidget'
import estilo from "./navbar.module.css"
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  if(props.isHeader){
    return (
      <nav className={estilo.nav}>
          <h3>
              <Link to ="/">Cybertron</Link>
          </h3>
          <ul>
            <li>
              <Link to ="/category/baja">Baja</Link>
            </li>
  
            <li>
              <Link to ="/category/media">Media</Link>
            </li>
  
            <li>
              <Link to ="/category/alta">Alta</Link>
            </li>

           
  
          </ul>
          <Link to='/cart'><CartWidget/></Link>
          
        </nav>
    )
  }
  else{
    return (
      <nav className={estilo.footer}>
          <h3>
              Jose Storani
          </h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
  
            <li>
              <a href="#">Instagram</a>
            </li>
  
            <li>
              <a href="#">Twitter</a>
            </li>
  
          </ul>
        </nav>
    )

  }
}


export default Navbar