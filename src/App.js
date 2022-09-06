

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import ItemCount  from "./components/Counter/ItemCount";
// import Api from "./components/Api/Api";



function App() {
  return (
    <>
    <Header/>
    <Main/>
    <ItemCount stock = {10} inicial = {1} onAdd ={() => console.log("Hola")}/>
    
    <Footer/>
    </>
  );
}

export default App;
