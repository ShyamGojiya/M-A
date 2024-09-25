import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";
import Cards from "./components/practices/Cards";
import Click from "./components/practices/Click";
import Login from "./components/login/Login";
import Home from "./Home";
import ScrollToTopButton from "./components/home/ScrollToTopButton";
import UsesCards from "./components/information/UsesCards";
import MainAbout from "./MainAbout";
import ProductList from "./components/purchase/ProductList";
import Cart from "./components/purchase/Cart";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/purchase/ProductDetails";
import Single_Mahiti from "./components/information/Single_Mahiti";
import Profile from "./components/home/Profile";
import { useDispatch } from "react-redux";
import { myProfileDetails } from "./features/User/userSlice";
import Dashboard from "./components/admin/Dashboard";
import AddPakPadhati from "./components/admin/AddPakPadhati";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(myProfileDetails());
  }, []);

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* <BrowserRouter> */}
      <Toaster />
      {!isAdmin && <Navbar />}
        <Routes>
          {/* User Router */}
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

          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />}>
            <Route path="add-pakpadhati" element={<AddPakPadhati />} />
          </Route>
          {/* <Route path="/admin">
            <Route index element={<Dashboard />} />
            <Route path="add-pakpadhati" element={<AddPakPadhati />} />
          </Route> */}
        </Routes>
      <div>
        <ScrollToTopButton />
      </div>
      <div>{!isAdmin && <Footer />}</div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
/*
-----------clone command-------
git checkout main
git pull origin main
*/
