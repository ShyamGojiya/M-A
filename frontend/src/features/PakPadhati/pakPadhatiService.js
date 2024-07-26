import axios from "axios";

const allPakPadhati = async () => {
  const response = await axios.get("http://localhost:2034/api/v1/pakPadhati");
  if (response.data) {
    return response.data;
  }
};

export const pakPadhatiService = { allPakPadhati };
