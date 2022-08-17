import Navbar from "../Navbar/Navbar"
import estilo from "./header.module.css"


const Header = () => {
    return (
        <header className={estilo.contenedorMain}>
            <Navbar/>
    </header>
    )
}

export default Header