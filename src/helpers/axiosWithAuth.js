
import axios from 'axios';

export const API_URL = 'http://localhost:8080/api';

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return axios.create({
    headers: {
      Authorization: `${token}`,
    },
    baseURL: `${API_URL}`,
  });
};