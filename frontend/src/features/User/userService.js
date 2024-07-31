import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const registerUser = async (newUser) => {
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  };
  // console.log(newUser);
  const response = await axios.post(
    REACT_APP_BACKEND_URL + "/user/register",
    newUser,
    config
  );
  console.log(response);
  if (response.data) {
    return response.data;
  }
};

export const userService = { registerUser };
