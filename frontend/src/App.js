import "./App.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";
import Cards from "./components/practices/Cards";
import Click from "./components/practices/Click";
import Login from "./components/login/Login";
import Home from "./Home";
import ScrollToTopButton from "./components/home/ScrollToTopButton";
import UsesCards from "./components/information/UsesCards";
import UsesNav from "./components/information/UsesNav";
import UseDetails from "./components/information/UseDetails";
import ImageGallery from "./components/practices/ImageGallery";
import VideoPlayer from "./components/practices/VideoPlayer";
import MainAbout from "./MainAbout";
import { Product } from './Product';
import ProductList from './components/purchase/ProductList';
import Cart from './components/purchase/Cart';
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/purchase/ProductDetails";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [apiInfoData, setApiInfoData] = useState([]);
  const [apiUsesData, setApiUsesData] = useState([]);

  // to get Plants packege of practicies
  const getPlantsInfo = async () => {
    const apiUrl = 'http://localhost:5000/api/v1/PlantInfo';

    await axios.get(apiUrl)
      .then(response => {
        // Store the retrieved data in the 'apiData' state variable
        setApiInfoData(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // to get plants uses from mongodb
  const getPlantsUses = async () => {
    const apiUrl2 = 'http://localhost:5000/api/v1/PlantUses';

    await axios.get(apiUrl2)
      .then(response => {
        // Store the retrieved data in the 'apiData' state variable
        setApiUsesData(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  useEffect(() => {
    getPlantsInfo();
    getPlantsUses();
  }, []);

  return (
    <>
      <Toaster />
      {/* Navbar Component default for all router */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productInfo" element={<ProductDetails />} />
        <Route path="/information" element={<UsesCards />} />
        <Route path="/purchase" element={<ProductList product={Product} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/practices" element={<Cards />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/api" element={<Click details={apiData}/>} /> */}

        {/* Dinamic Plant Practices Routers */}
        {apiInfoData.map((value, index) => {
          // console.log(value);
          // Practices route only
          return (
            <Route key={"router" + index}>
              <Route
                key={"route" + index}
                path={"/" + value.plantName}
                element={<Click details={value} />}
              />
              {
                // Practices Image and Video button routes
                value.details.map((val, idx) => {
                  return (
                    <Route key={"iv router" + idx}>
                      <Route
                        path={"/" + value.plantName + "/" + val.title + "/છબીઓ"}
                        element={<ImageGallery details={val} crop={value.plantName} />}
                      />
                      <Route
                        path={"/" + value.plantName + "/" + val.title + "/વિડિઓ"}
                        element={<VideoPlayer title={[value.plantName, val.title]} video={val.video} />}
                      />
                    </Route>
                  );
                })
              }
            </Route>
          );

          // Practices Image and Video Button Routes
        })}

        {/* Dinamic Plant Uses Routers */}
        {apiUsesData.map((value, index) => {
          // console.log(value);
          return (
            <Route key={"router" + index}>
              <Route
                key={"route" + index}
                path={"/" + value.plantName.trim() + "ના ઉપયોગ"}
                element={<UsesNav uses={value} />}
              />
              <Route
                key={"route1" + index}
                path={"/" + value.plantName.trim() + "ના ઉપયોગ/મનુષ્ય માટે"}
                element={<UseDetails uses={value} usesIn={"મનુષ્ય"} />}
              />
              <Route
                key={"route2" + index}
                path={"/" + value.plantName.trim() + "ના ઉપયોગ/પશુપાલન માટે"}
                element={<UseDetails uses={value} usesIn={"પશુપાલન"} />}
              />
              <Route
                key={"route3" + index}
                path={"/" + value.plantName.trim() + "ના ઉપયોગ/ખેતી માટે"}
                element={<UseDetails uses={value} usesIn={"ખેતી"} />}
              />
            </Route>
          );
        })}
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
