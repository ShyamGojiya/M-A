import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const OrderTypeChange = async (id, token) => {
  const response = await axios.put(
    REACT_APP_BACKEND_URL + `/product/order/${id}?token=${token}`,
    token
  );

  if (response.data) {
    return response.data;
  }
};

const getAllOrder = async (token) => {
  const response = await axios.get(
    REACT_APP_BACKEND_URL + `/product/order/admin?token=${token}`
  );
  //   console.log(response.data);
  if (response.data) {
    return response.data;
  }
};

export const AdminOrderService = {
  getAllOrder,
  OrderTypeChange,
};
