import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const addPakMahiti = async (plantData) => {
  const link = REACT_APP_BACKEND_URL + `/pakMahiti`;
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  const response = await axios.post(link, plantData, config);
  console.log(response);
  if (response.data) {
    console.log(response.data);
    return response.data;
  }
};

const detailsPakMahiti = async () => {
  const link = REACT_APP_BACKEND_URL + `/pakMahiti`;
  const config = {
    withCredentials: true,
  };
  const response = await axios.get(link, config);
  if (response.data) {
    return response.data;
  }
};

const deletePakMahiti = async (id) => {
  const link = REACT_APP_BACKEND_URL + `/pakMahiti/del/${id}`;
  const config = {
    withCredentials: true,
  };
  const response = await axios.delete(link, config);
  if (response.data) {
    return response.data;
  }
};

export const PakMahitiService = {
  addPakMahiti,
  detailsPakMahiti,
  deletePakMahiti,
};
