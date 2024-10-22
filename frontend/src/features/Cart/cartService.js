import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const addItemToCart = async (data, token) => {
  // console.log(data);
  const response = await axios.post(
    REACT_APP_BACKEND_URL + `/cart/add?token=${token}`,
    data
  );
  //   console.log(response.data);
  if (response.data) {
    return response.data;
  }
};

const getMyCart = async (token) => {
  const response = await axios.get(
    REACT_APP_BACKEND_URL + `/cart/mycart?token=${token}`
  );
  if (response.data) {
    return response.data;
  }
};

const deleteFromCart = async (id, token) => {
  const response = await axios.delete(
    REACT_APP_BACKEND_URL + `/cart/del/${id}?token=${token}`
  );
  if (response.data) {
    return response.data;
  }
};

const updateCartQuantity = async (data, token) => {
  const response = await axios.put(
    REACT_APP_BACKEND_URL +
      `/cart/quntity/${data.id}/${data.quantity}?token=${token}`
  );
  if (response.data) {
    return response.data;
  }
};

export const cartService = {
  addItemToCart,
  getMyCart,
  deleteFromCart,
  updateCartQuantity,
};
