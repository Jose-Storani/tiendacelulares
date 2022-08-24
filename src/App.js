

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import ItemCount  from "./components/Counter/ItemCount";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <Header/>
    <ItemListContainer saludo="este es nuestro catalogo"/>
    <Main/>
    <ItemCount/>
    <Footer/>
    </>
  );
}

export default App;
