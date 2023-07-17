import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import HomePage from "./pages/Homepage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductCollectionPage from "./pages/ProductCollectionPage"
import ProductPage from "./pages/ProductPage"

import 'antd/dist/reset.css';


const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/mall"/>} />
        <Route exact path="/mall" element={<HomePage/>} />
        <Route exact path="/cart" element={<CartPage/>} />
        <Route exact path="/checkout" element={<CheckoutPage/>} />
        <Route exact path="/mall/:categoryName" element={<ProductCollectionPage/>} />
        <Route exact path="/:productName" element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
