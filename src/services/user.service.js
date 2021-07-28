import axios from 'axios';
import authHeader from '../helpers/authHeader';

const API_URL = 'http://localhost:8080/api';

export const userService = {
    login,
    logout,
    register,
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById
};

const login = (email, password) => {
    axios
        .post(`${API_URL}/auth/login`, { email, password })
        .then((res) => {
            if (res.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(res.data));
            }

            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
};

const register = (email, password) => {
    axios
        .post(`${API_URL}/auth/register`, { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

const getAllUsers = () => {
    axios
        .get(`${API_URL}/users`, { headers: authHeader() })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

const getUserById = (id) => {
    axios
        .get(`${API_URL}/users/${id}`, { headers: authHeader() })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

const editUserById = (id, editedUser) => {
    axios
        .put(`${API_URL}/users/${id}`, { editedUser, headers: authHeader() })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

const deleteUserById = (id) => {
    axios
        .delete(`${API_URL}/users/${id}`, { headers: authHeader() })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};