import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:8080/api/';

class UserService {
  getUsers() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getProjects() {
    return axios.get(API_URL + 'projects', { headers: authHeader() });
  }

  getTickets() {
    return axios.get(API_URL + 'tickets', { headers: authHeader() });
  }
}

export default new UserService();