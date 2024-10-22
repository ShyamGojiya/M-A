import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const newProduct = async (data) => {
  const link = REACT_APP_BACKEND_URL + `/product`;
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  console.log(data);
  const response = await axios.post(link, data, config);
  console.log(response);

  if (response.data) {
    return response.data;
  }
};

export const productService = {
  newProduct,
};
