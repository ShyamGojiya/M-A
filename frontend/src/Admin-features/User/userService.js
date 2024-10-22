import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config";

const allUserDetails = async () => {
  const link = REACT_APP_BACKEND_URL + `/user`;
  const config = {
    withCredentials: true,
  };

  const response = await axios.get(link, config);

  if (response.data) {
    return response.data;
  }
};

export const userService = {
  allUserDetails,
};
