import Navbar from "../Navbar/Navbar"
import estilo from "./footer.module.css"

const Footer = () =>{
    return (
        <footer className={estilo["contenedorMain"]}>
            
            <Navbar isHeader={false}/>

        </footer>
    )
}

export default Footer