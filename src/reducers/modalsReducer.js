import {
    SHOW_LOGIN,
    CLOSE_LOGIN,
    SHOW_ADD_PROJECT,
    CLOSE_ADD_PROJECT,
    SHOW_DELETE_PROJECT,
    CLOSE_DELETE_PROJECT
} from '../actions/modalActions';

// INITIAL MODAL STATE

const initialModalState = {
    showUserLoginModal: true,
    showAddProjectModal: false,
    showDeleteProjectModal: false
};

// MODALS REDUCER

export const modalsReducer = (state = initialModalState, action) => {
    switch (action.type) {
        // LOGIN MODAL
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
        // ADD PROJECT MODAL
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
        case SHOW_DELETE_PROJECT:
            return {
                ...state,
                showDeleteProjectModal: true
            };
        case CLOSE_DELETE_PROJECT:
            return {
                ...state,
                showDeleteProjectModal: false
            };
        // DELETE PROJECT MODAL
        default:
            return state;
    }
};