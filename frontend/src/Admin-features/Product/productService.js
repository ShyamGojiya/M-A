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

const allProductDetails = async () => {
  const link = REACT_APP_BACKEND_URL + `/product`;
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  // console.log(link);
  const response = await axios.get(link, config);
  // console.log(response);

  if (response.data) {
    return response.data;
  }
};

const deleteSingleProduct = async (id) => {
  const link = REACT_APP_BACKEND_URL + `/product/del/${id}`;
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };

  const response = await axios.delete(link, config);

  if (response.data) {
    return response.data;
  }
};

export const productService = {
  newProduct,
  allProductDetails,
  deleteSingleProduct,
};
