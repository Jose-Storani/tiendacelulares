

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import ItemCount  from "./components/Counter/ItemCount";
import { BrowserRouter } from "react-router-dom";
// import Api from "./components/Api/Api";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>       
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
