import {
    SHOW_LOGIN,
    CLOSE_LOGIN,
    SHOW_ADD_PROJECT,
    CLOSE_ADD_PROJECT,
    SHOW_DELETE_PROJECT,
    CLOSE_DELETE_PROJECT,
    SHOW_EDIT_PROJECT,
    CLOSE_EDIT_PROJECT,
    SHOW_ADD_TICKET,
    CLOSE_ADD_TICKET,
    SHOW_DELETE_TICKET,
    CLOSE_DELETE_TICKET
} from '../actions/modalActions';

// INITIAL MODAL STATE

const initialModalState = {
    showUserLoginModal: true,
    showAddProjectModal: false,
    showDeleteProjectModal: false,
    showEditProjectModal: false,
    showAddTicketModal: false,
    showDeleteTicketModal: false
};

// MODALS REDUCER

export const modalReducer = (state = initialModalState, action) => {
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
        // DELETE PROJECT MODAL
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
        // EDIT PROJECT MODAL
        case SHOW_EDIT_PROJECT:
            return {
                ...state,
                showEditProjectModal: true
            };
        case CLOSE_EDIT_PROJECT:
            return {
                ...state,
                showEditProjectModal: false
            };
        // ADD TICKET MODAL
        case SHOW_ADD_TICKET:
            return {
                ...state,
                showAddTicketModal: true
            };
        case CLOSE_ADD_TICKET:
            return {
                ...state,
                showAddTicketModal: false
            };
        // DELETE TICKET MODAL
        case SHOW_DELETE_TICKET:
            return {
                ...state,
                showDeleteTicketModal: true
            };
        case CLOSE_DELETE_TICKET:
            return {
                ...state,
                showDeleteTicketModal: false
            };
        default:
            return state;
    }
};