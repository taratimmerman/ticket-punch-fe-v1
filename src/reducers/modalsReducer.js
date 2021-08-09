import {
    SHOW_LOGIN,
    CLOSE_LOGIN
} from '../actions/modalActions';

// INITIAL MODAL STATE

const initialModalState = {
    showUserLoginModal: true
};

// MODALS REDUCER

export const modalsReducer = (state = initialModalState, action) => {
    switch (action.type) {
        case SHOW_LOGIN:
            return {
                ...state,
                showUserLoginModal: true
            };
        case CLOSE_LOGIN:
            return {
                ...state,
                showUserLoginModal: false
            };
        default:
            return state;
    }
};