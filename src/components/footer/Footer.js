import Navbar from "../Navbar/Navbar"
import estilo from "./footer.module.css"

const Footer = () =>{
    return (
        <footer className={estilo.contenedorMain}>
            <h5>Jose Storani</h5>
            <Navbar/>

        </footer>
    )
}

export default Footer