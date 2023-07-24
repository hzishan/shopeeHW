import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import HomePage from "./pages/Homepage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductCollectionPage from "./pages/ProductCollectionPage"
import ProductPage from "./pages/ProductPage"

import 'antd/dist/reset.css';
import ScrollToTop from "./components/common/ScrollToTop";
import { AuthProvider } from "./components/auth/AuthContext";


const App = ()=>{
  return(
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Navigate to="/mall"/>} />
          <Route exact path="/mall" element={<HomePage/>} />
          <Route exact path="/cart" element={<CartPage/>} />
          <Route exact path="/checkout" element={<CheckoutPage/>} />
          <Route exact path="/mall/:categoryName" element={<ProductCollectionPage/>} />
          <Route exact path="/:productName" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
