import { useMutation, useQuery } from "react-query";
import axios from "axios";

const getAboutData = async () => {
  const url = "http://127.0.0.1:3002/about";
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const getAboutRow = async (row) => {
  const url = "http://127.0.0.1:3002/about";
  const response = await axios.post(url, row, {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const useAboutQuery = () => {
  return useQuery("Get-About-Data", getAboutData);
};

export const useAboutMutation = () => {
  return useMutation(getAboutRow);
};
