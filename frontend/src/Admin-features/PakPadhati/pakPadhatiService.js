import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

// const allPakPadhati = async () => {
//   // console.log(REACT_APP_BACKEND_URL);
//   const response = await axios.get(REACT_APP_BACKEND_URL + "/pakPadhati");
//   if (response.data) {
//     return response.data;
//   }
// };

// const singlePakPadhati = async (id) => {
//   const response = await axios.get(
//     REACT_APP_BACKEND_URL+`/pakPadhati/${id}`
//   );
//   if (response.data) {
//     return response.data;
//   }
// };

const addPakPadhati = async (plantData) => {
  const link = REACT_APP_BACKEND_URL + `/pakPadhati`;
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  // console.log("service : ", plantData);
  const response = await axios.post(link, plantData, config);
  console.log(response);
  if (response.data) {
    return response.data;
  }
};

export const pakPadhatiService = { addPakPadhati };
