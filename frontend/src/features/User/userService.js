import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const registerUser = async (newUser) => {
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  };
  console.log(newUser);
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

const loginUser = async (loginData) => {
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  // console.log(loginData);
  const response = await axios.post(
    REACT_APP_BACKEND_URL + "/user/login",
    loginData,
    config
  );
  console.log(response);
  if (response.data) {
    return response.data;
  }
};

const logoutUser = async () => {
  const config = {
    withCredentials: true,
  };
  const response = await axios.get(
    REACT_APP_BACKEND_URL + "/user/logout",
    config
  );
  console.log(response);
  if (response.data) {
    return response.data;
  }
};

const myProfile = async () => {
  const config = {
    withCredentials: true,
  };
  const link = REACT_APP_BACKEND_URL + "/user/profile";
  const response = await axios.get(link, config);
  // console.log(response.data.data);
  if (response.data.data) {
    return JSON.parse(JSON.stringify(response.data.data));
  }
};

export const userService = { registerUser, loginUser, myProfile, logoutUser };
