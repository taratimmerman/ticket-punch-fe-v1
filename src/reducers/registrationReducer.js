import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/userActions';

// INITIAL REGISTRATION STATE

const initialRegistrationState = {
    status: ''
};

// REGISTRATION REDUCER

export const registrationReducer = (state = initialRegistrationState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload,
                status: 'Pending...'
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                status: 'Success'
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                status: 'Failed'
            };
        default:
            return state;
    }
};