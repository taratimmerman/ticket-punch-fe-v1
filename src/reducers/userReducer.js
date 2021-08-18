import {
    GETALL_REQUEST,
    GETALL_SUCCESS,
    GETALL_FAILURE,
    GETUSER_REQUEST,
    GETUSER_SUCCESS,
    GETUSER_FAILURE,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE
} from '../actions/userActions';

// INITIAL USER STATE

export const initialUserState = {
    users: [],
    user: {},
    status: '',
    error: null
};

// USER REDUCER

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        // GET ALL USERS
        case GETALL_REQUEST:
            return {
                ...state,
                status: 'Pending...'
            };
        case GETALL_SUCCESS:
            return {
                ...state,
                users: action.payload,
                status: 'Success'
            };
        case GETALL_FAILURE:
            return {
                ...state,
                error: action.payload,
                status: 'Failed'
            };
        // GET USER BY ID
        case GETUSER_REQUEST:
            return {
                ...state,
                status: 'Pending...'
            };
        case GETUSER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                status: 'Success'
            };
        case GETUSER_FAILURE:
            return {
                ...state,
                error: action.payload,
                status: 'Failed'
            };
        // PUT (UPDATE) USER
        case UPDATE_REQUEST:
            return {
                ...state,
                status: 'Pending...'
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                status: 'Success'
            };
        case UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload,
                status: 'Failed'
            };
        // DELETE USER
        case DELETE_REQUEST:
            return{
                ...state,
                status: 'Pending...'
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                status: 'Success'
            };
        case DELETE_FAILURE:
            return {
                ...state,
                error: action.payload,
                status: 'Failed'
            };
        default:
            return state;
    }
};