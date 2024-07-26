import React, { Component } from "react";
// import isabgul from "../Images/isb.png";
// import mithi from "../Images/mithi.jpg";
// import asadio from "../Images/asadiyo.jpeg";
// import kadijiri from "../Images/kadijiri.jpg";
// import kariyatur from "../Images/kalmegh.jpg";
// import aswagandha from "../Images/ashvagandha.jpg";
// import safelmulsi from "../Images/safed.jpg";
// import kuvarpathu from "../Images/kuarpathu.jpg";
// import sankhpuspi from "../Images/shankhpushpi.jpg";
// import dodi from "../Images/dodi.jpg";
import { Link } from "react-router-dom";
// import { platsDetails } from "../../Data";
import imgISB from "../../Images/img.jpg";
import axios from 'axios';


class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      apiData: [],
    };
  }

  getPlantsInfo = async () => {
    const apiUrl = 'http://localhost:5000/api/v1/PlantInfo';

    try {
      const response = await axios.get(apiUrl);
      this.setState({ apiData: response.data });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  componentDidMount() {
    // Scroll to top on component mount
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    });

    this.getPlantsInfo();
  }

  render() {
    return (
      <>
        <div className=" my-5">
          <div className="flex gap-3 flex-wrap justify-center">
            {this.state.apiData.map((value, index) => {
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
                  <Link to={`/${value.plantName}`} className="w-full">
                    <button className="w-full rounded-full bg-br hover:bg-hbr text-white font-semibold py-1.5">
                      વધુ વાંચો &#8594;
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
}

export default Cards;
