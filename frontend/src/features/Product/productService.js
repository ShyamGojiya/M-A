import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const allProduct = async () => {
  const response = await axios.get(REACT_APP_BACKEND_URL + "/product");
  if (response.data) {
    return response.data;
  }
};

const singleProduct = async (id) => {
  const response = await axios.get(REACT_APP_BACKEND_URL + "/product/" + id);
  if (response.data) {
    return response.data;
  }
};

export const productService = { allProduct, singleProduct };
