import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../helpers/history';

export const userActions = {
    loginUser,
    logoutUser,
    registerUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};

const loginUser = (email, password) => (dispatch) => {
    dispatch({ type: userConstants.LOGIN_REQUEST });

    userService.login(email, password)
        .then((res) => {
            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                payload: { user: res.data },
            });
            history.push('/projects');
        })
        .catch((err) => {
            dispatch({
                type: userConstants.LOGIN_FAILURE,
                payload: { error: err.message }
            });
            dispatch({
                type: alertActions.error(err.toString())
            });
        });
};

const logoutUser = () => (dispatch) => {
    userService.logout()
        .then((res) => {
            dispatch({
                type: userConstants.LOGOUT,
                payload: { message: res.data.message }
            });
            history.push('/login');
        })
        .catch((err) => {
            return err.message;
        });
};

const registerUser = (email, password) => (dispatch) => {
    dispatch({ type: userConstants.REGISTER_REQUEST });

    userService.register(email, password)
        .then((res) => {
            dispatch({
                type: userConstants.REGISTER_SUCCESS,
                payload: { user: res.data }
            });
            loginUser(email, password);
        })
        .catch((err) => {
            dispatch({
                type: userConstants.REGISTER_FAILURE,
                payload: { error: err.message }
            });
            dispatch({
                type: alertActions.error(err.toString())
            });
        });
};

const getAllUsers = () => (dispatch) => {
    dispatch({ type: userConstants.GETALL_REQUEST });

    userService.getAllUsers()
        .then((res) => {
            dispatch({
                type: userConstants.GETALL_SUCCESS,
                payload: { users: res.data }
            });
        })
        .catch((err) => {
            dispatch({
                type: userConstants.GETALL_FAILURE,
                payload: { error: err.message }
            });
            dispatch({
                type: alertActions.err(err.toString())
            });
        });
};

const getUser = (id) => (dispatch) => {
    dispatch({ type: userConstants.GETUSER_REQUEST });

    userService.getUserById(id)
        .then((res) => {
            dispatch({
                type: userConstants.GETUSER_SUCCESS,
                payload: { user: res.data }
            });
        })
        .catch((err) => {
            dispatch({
                type: userConstants.GETUSER_FAILURE,
                payload: { error: err.message }
            });
            dispatch({
                type: alertActions.err(err.toString())
            });
        });
};

const updateUser = (id, editedUser) => (dispatch) => {
    dispatch({ type: userConstants.UPDATE_REQUEST });

    userService.editUserById(id, editedUser)
        .then((res) => {
            dispatch({
                type: userConstants.UPDATE_SUCCESS,
                payload: { user: res.data }
            });
        })
        .catch((err) => {
            dispatch({
                type: userConstants.UPDATE_FAILURE,
                payload: { error: err.message }
            });
            dispatch({
                type: alertActions.err(err.toString())
            });
        });
};

const deleteUser = (id) => (dispatch) => {
    dispatch({ type: userConstants.DELETE_REQUEST});

    userService.deleteUserById(id)
    .then((res) => {
        dispatch({
            type: userConstants.DELETE_SUCCESS,
            payload: { deleted: res.data }
        });
    })
    .catch((err) => {
        dispatch({
            type: userConstants.DELETE_FAILURE,
            payload: { error: err.message }
        });
        dispatch({
            type: alertActions.err(err.toString())
        });
    });
};