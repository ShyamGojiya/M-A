import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";
// import { message } from "antd";

const registerUser = async (newUser) => {
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  };
  const response = await axios.post(
    REACT_APP_BACKEND_URL + "/user/register",
    newUser,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const loginUser = async (loginData) => {
  const config = {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };

  const response = await axios.post(
    REACT_APP_BACKEND_URL + "/user/login",
    loginData,
    config
  );

  if (response.data) {
    return response.data;
  }
};

const logoutUser = async () => {
  // const config = {
  //   withCredentials: true,
  // };
  localStorage.removeItem("token");
  const response = await axios.get(REACT_APP_BACKEND_URL + "/user/logout");
  console.log(response);
  // return { message: "logout success" };
  if (response.data) {
    return response.data;
  }
};

const myProfile = async () => {
  const config = {
    withCredentials: true,
  };
  const token = localStorage.getItem("token");

  const link = REACT_APP_BACKEND_URL + `/user/profile?token=${token}`;
  const response = await axios.get(link, config);
  if (response.data.data) {
    return JSON.parse(JSON.stringify(response.data.data));
  }
};

export const userService = { registerUser, loginUser, myProfile, logoutUser };
