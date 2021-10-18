import axios from 'axios';

// eslint-disable-next-line import/no-cycle
import { history } from '../App';
import { API_URL, axiosWithAuth } from '../helpers/axiosWithAuth';
import {
  closeEditAccountModalAction,
  closeDeleteAccountModalAction,
} from './modalActions';

// USER ACTION TYPES

export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';

export const LOGOUT = 'USERS_LOGOUT';

export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';

export const GETALL_REQUEST = 'USERS_GETALL_REQUEST';
export const GETALL_SUCCESS = 'USERS_GETALL_SUCCESS';
export const GETALL_FAILURE = 'USERS_GETALL_FAILURE';

export const GETUSER_REQUEST = 'USERS_GETUSER_REQUEST';
export const GETUSER_SUCCESS = 'USERS_GETUSER_SUCCESS';
export const GETUSER_FAILURE = 'USERS_GETUSER_FAILURE';

export const UPDATE_REQUEST = 'USERS_UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'USERS_UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'USERS_UPDATE_FAILURE';

export const DELETE_REQUEST = 'USERS_DELETE_REQUEST';
export const DELETE_SUCCESS = 'USERS_DELETE_SUCCESS';
export const DELETE_FAILURE = 'USERS_DELETE_FAILURE';

// USER ACTION CREATORS

export const loginUserAction = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  axios
    .post(`${API_URL}/auth/login`, { email, password })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      window.localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/projects');
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.message,
      });
    });
};

export const logoutUserAction = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('user');
  history.push('/login');
};

export const registerUserAction = (email, password) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  axios
    .post(`${API_URL}/auth/register`, { email, password })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loginUserAction(email, password));
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.message,
      });
    });
};

export const getAllUsersAction = () => (dispatch) => {
  dispatch({ type: GETALL_REQUEST });

  axiosWithAuth()
    .get(`${API_URL}/users`)
    .then((res) => {
      dispatch({
        type: GETALL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETALL_FAILURE,
        payload: err.message,
      });
    });
};

export const getUserByIdAction = (userId) => (dispatch) => {
  dispatch({ type: GETUSER_REQUEST });

  axiosWithAuth()
    .get(`${API_URL}/users/${userId}`)
    .then((res) => {
      dispatch({
        type: GETUSER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETUSER_FAILURE,
        payload: err.message,
      });
    });
};

export const updateUserAction = (userId, email, password) => (dispatch) => {
  dispatch({ type: UPDATE_REQUEST });

  axiosWithAuth()
    .put(`${API_URL}/users/${userId}`, { email, password })
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
      dispatch(closeEditAccountModalAction());
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_FAILURE,
        payload: err.message,
      });
    });
};

export const deleteUserAction = (userId) => (dispatch) => {
  dispatch({ type: DELETE_REQUEST });

  axiosWithAuth()
    .delete(`${API_URL}/users/${userId}`)
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data,
      });
      dispatch(closeDeleteAccountModalAction());
      dispatch(logoutUserAction());
    })
    .catch((err) => {
      dispatch({
        type: DELETE_FAILURE,
        payload: err.message,
      });
    });
};
