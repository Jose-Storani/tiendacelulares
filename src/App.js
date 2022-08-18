
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer saludo="este es nuestro catalogo"/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
