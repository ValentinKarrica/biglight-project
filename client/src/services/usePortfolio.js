import { useMutation, useQuery } from "react-query";
import axios from "axios";

const getPortfolioData = async () => {
  const url = "http://127.0.0.1:3002/portfolio";
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const getPortfolioRow = async (row) => {
  const url = "http://127.0.0.1:3002/portfolio";
  const response = await axios.post(url, row, {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const usePortfolioQuery = () => {
  return useQuery("Get-Portfolio-Data", getPortfolioData);
};

export const usePortfolioMutation = () => {
  return useMutation(getPortfolioRow);
};
