import { useQuery } from "react-query";
import axios from "axios";

const getHomeData = async () => {
  const url = "http://127.0.0.1:3002";
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const useHomeQuery = () => {
  return useQuery("Get-Home-Data", getHomeData);
};
