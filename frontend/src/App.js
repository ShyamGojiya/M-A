import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";
import Cards from "./components/practices/Cards";
import Click from "./components/practices/Click";
import Login from "./components/login/Login";
import Home from "./Home";
import ScrollToTopButton from "./components/home/ScrollToTopButton";
import UsesCards from "./components/information/UsesCards";
import MainAbout from "./MainAbout";
import { Product } from "./Product";
import ProductList from "./components/purchase/ProductList";
import Cart from "./components/purchase/Cart";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/purchase/ProductDetails";
import Single_Mahiti from "./components/information/Single_Mahiti";
import Profile from "./components/home/Profile";
import { useDispatch } from "react-redux";
import { myProfileDetails } from "./features/User/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myProfileDetails());
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practices" element={<Cards />} />
        <Route path="/practices/:id" element={<Click />} />
        <Route path="/information" element={<UsesCards />} />
        <Route path="/information/:id" element={<Single_Mahiti />} />
        <Route path="/purchase" element={<ProductList />} />
        <Route path="/purchase/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <div>
        <ScrollToTopButton />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
/*
-----------clone command-------
git checkout main
git pull origin main
*/
