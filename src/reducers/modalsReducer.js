import {
    SHOW_LOGIN,
    CLOSE_LOGIN,
    SHOW_ADD_PROJECT,
    CLOSE_ADD_PROJECT
} from '../actions/modalActions';

// INITIAL MODAL STATE

const initialModalState = {
    showUserLoginModal: true,
    showAddProjectModal: false
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
        case SHOW_ADD_PROJECT:
            return {
                ...state,
                showAddProjectModal: true
            };
        case CLOSE_ADD_PROJECT:
            return {
                ...state,
                showAddProjectModal: false
            };
        default:
            return state;
    }
};