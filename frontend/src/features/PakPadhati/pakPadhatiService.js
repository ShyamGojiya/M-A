import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const allPakPadhati = async () => {
  // console.log(REACT_APP_BACKEND_URL);
  const response = await axios.get(REACT_APP_BACKEND_URL + "/pakPadhati");
  if (response.data) {
    return response.data;
  }
};

const singlePakPadhati = async (id) => {
  const response = await axios.get(
    REACT_APP_BACKEND_URL+`/pakPadhati/${id}`
  );
  if (response.data) {
    return response.data;
  }
};

export const pakPadhatiService = { allPakPadhati, singlePakPadhati };
