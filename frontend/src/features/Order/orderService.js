import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const addItemToOrder = async (token) => {
  const response = await axios.post(
    REACT_APP_BACKEND_URL + `/product/order?token=${token}`,
    token
  );

  if (response.data) {
    return response.data;
  }
};

const getAllOrder = async (token) => {
  const response = await axios.get(
    REACT_APP_BACKEND_URL + `/product/order/all?token=${token}`
  );
  //   console.log(response.data);
  if (response.data) {
    return response.data;
  }
};

export const orderService = {
  addItemToOrder,
  getAllOrder,
};
