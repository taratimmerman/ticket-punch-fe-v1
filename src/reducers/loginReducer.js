import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/userActions';
import { errorReducer } from './errorReducer';

// INITIAL LOGIN STATE

const initialLoginState ={ 
    loggedIn: true, 
    status: ''
};

// LOGIN REDUCER

export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                ...errorReducer(state, action),
                loggingIn: true,
                user: action.payload,
                status: 'Pending...'
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...errorReducer(state, action),
                loggedIn: true,
                user: action.payload,
                status: 'Success'
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                ...errorReducer(state, action),
                loggedIn: false,
                error: action.payload,
                status: 'Failed'
            };
        default:
            return state;
    }
};