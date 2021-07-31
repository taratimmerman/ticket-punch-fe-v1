import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/userActions';

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
                loggingIn: true,
                user: action.payload,
                status: 'Pending...'
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
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