

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./context/CartContext";
// import Api from "./components/Api/Api";



function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</CartProvider>
		
	);
}

export default App;
