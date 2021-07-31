
import axios from 'axios';

export const API_URL = 'http://localhost:8080/api';

export const axiosWithAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return axios.create({
    headers: {
      Authorization: `${user.token}`,
    },
    baseURL: `${API_URL}`,
  });
};