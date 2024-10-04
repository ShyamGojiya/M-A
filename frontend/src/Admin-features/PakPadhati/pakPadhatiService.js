import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const addPakPadhati = async (plantData) => {
  const link = REACT_APP_BACKEND_URL + `/pakPadhati`;
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  const response = await axios.post(link, plantData, config);
  console.log(response);
  if (response.data) {
    return response.data;
  }
};

const detailsPakPadhati = async (plantData) => {
  const link = REACT_APP_BACKEND_URL + `/pakPadhati`;
  const config = {
    withCredentials: true,
  };
  const response = await axios.get(link, config);
  console.log(response);
  if (response.data) {
    return response.data;
  }
};

export const pakPadhatiService = { addPakPadhati, detailsPakPadhati };
