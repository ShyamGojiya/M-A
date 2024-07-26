import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { PlantsUses } from "../../Uses";
import imgISB from "../../Images/img.jpg";
// Import axios
import axios from 'axios';


const UsesCards = () => {
  const [apiUsesData, setApiUsesData] = useState([]);

  // to get plants uses from mongodb
  const getPlantsUses = async () =>{
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
    // for on load scroll to top
    window.scrollTo({
      top: 0,
    });
    
    getPlantsUses();
  }, []);

  return (
    <>
      <div className=" my-5">
        <div className="flex gap-3 flex-wrap justify-center">
          {apiUsesData.map((value, index) => {
            return (
              <div
                key={"card" + index}
                className="flex flex-col justify-between p-2 w-60 bg-white rounded-2xl transition ease-in-out delay-150 hover:scale-105 hover:shadow-el"
              >
                <div>
                  <img
                    src={value.thumbnail || imgISB}
                    className="w-60 h-60 rounded-xl "
                    alt=""
                  />
                </div>

                <span className="w-full text-center font-bold py-6 text-lg">
                  {value.plantName}
                </span>
                <Link to={`/${value.plantName.trim()}ના ઉપયોગ`} className="w-full">
                  <button className="w-full rounded-full bg-br hover:bg-hbr text-white font-semibold py-1.5">
                    ઉપયોગ વાંચો &#8594;
                  </button>
                </Link>
              </div>
              // <div key={"card" + index} className="card">
              //   <img
              //     className="card-image"
              //     src={value.thumbnail || imgISB}
              //     alt="Card img"
              //   />
              //   <div className="card-content">
              //     <div className="card-text">
              //       <b>{value.plantName}</b>
              //     </div>
              //     <Link to={`/${value.plantName}`} className="custom-link">
              //       <button className="card-round-button">
              //         <b>વધુ વાંચો &#8594;</b>
              //       </button>
              //     </Link>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UsesCards
