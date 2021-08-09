import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/userActions';

// INITIAL LOGIN STATE

const initialLoginState = { 
    loggedIn: false, 
    status: '',
    error: null
};

// LOGIN REDUCER

export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload,
                status: 'Pending...'
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                error: null,
                status: 'Success'
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
                status: 'Failed'
            };
        default:
            return state;
    }
};