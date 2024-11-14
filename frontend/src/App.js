import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
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
import { default as MyOrder } from "./components/purchase/Order";
import Single_Mahiti from "./components/information/Single_Mahiti";
import Profile from "./components/home/Profile";
import { useDispatch } from "react-redux";
import { myProfileDetails } from "./features/User/userSlice";
import Dashboard from "./components/admin/Dashboard";
import AddPakPadhati from "./components/admin/AddPakPadhati";
import DetailsPakPadhati from "./components/admin/DetailsPakPadhati";
import AddPakMahiti from "./components/admin/AddPakMahiti";
import DetailsPakMahiti from "./components/admin/DetailsPakMahiti";
import DetailsUser from "./components/admin/DetailsUser";
import AddProduct from "./components/admin/AddProduct";
import DetailsProduct from "./components/admin/DetailsProduct";
import Order from "./components/admin/Order";
import UpdateProduct from "./components/admin/UpdateProduct";
import SuccessPage from "./components/purchase/SuccessPage";
import CancelPage from "./components/purchase/CancelPage";
import UpdateProfile from "./components/home/UpdateProfile";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(myProfileDetails());
  }, []);

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* react hot toast */}
      <Toaster />

      {/* Main Navbar */}
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
        <Route path="/order" element={<MyOrder />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/me/update" element={<UpdateProfile />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="add-pakpadhati" element={<AddPakPadhati />} />
          <Route path="view-pakpadhati" element={<DetailsPakPadhati />} />
          <Route path="add-pakmahiti" element={<AddPakMahiti />} />
          <Route path="view-pakmahiti" element={<DetailsPakMahiti />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="view-product" element={<DetailsProduct />} />
          <Route path="product/:id" element={<UpdateProduct />} />
          <Route path="users" element={<DetailsUser />} />
          <Route path="orders" element={<Order />} />
        </Route>
      </Routes>

      {/* ScrollToTop button */}
      <div>{!isAdmin && <ScrollToTopButton />}</div>

      {/* Footer */}
      <div>{!isAdmin && <Footer />}</div>
    </>
  );
}

export default App;
/*
-----------clone command-------
git checkout main
git pull origin main
*/
