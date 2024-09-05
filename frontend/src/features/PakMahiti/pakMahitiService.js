import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const allPakMahiti = async () => {
  const response = await axios.get(REACT_APP_BACKEND_URL + "/pakMahiti");
  if (response.data) {
    return response.data;
  }
};

const singlePakMahiti = async (id) => {
  const response = await axios.get(
    REACT_APP_BACKEND_URL + "/pakMahiti/sing/" + id
  );
  if (response.data) {
    return response.data;
  }
};

export const pakMahitiService = { allPakMahiti, singlePakMahiti };
