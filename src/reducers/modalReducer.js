import {
  SHOW_LOGIN,
  CLOSE_LOGIN,
  SHOW_WELCOME,
  CLOSE_WELCOME,
  SHOW_HELP,
  CLOSE_HELP,
  SHOW_ADD_PROJECT,
  CLOSE_ADD_PROJECT,
  SHOW_DELETE_PROJECT,
  CLOSE_DELETE_PROJECT,
  SHOW_EDIT_PROJECT,
  CLOSE_EDIT_PROJECT,
  SHOW_ADD_TICKET,
  CLOSE_ADD_TICKET,
  SHOW_DELETE_TICKET,
  CLOSE_DELETE_TICKET,
  SHOW_EDIT_TICKET,
  CLOSE_EDIT_TICKET,
  SHOW_DELETE_ACCOUNT,
  CLOSE_DELETE_ACCOUNT,
  SHOW_EDIT_ACCOUNT,
  CLOSE_EDIT_ACCOUNT,
} from '../actions/modalActions';

// INITIAL MODAL STATE

const initialModalState = {
  showUserLoginModal: true,
  showWelcomeModal: true,
  showHelpModal: false,
  showAddProjectModal: false,
  showDeleteProjectModal: false,
  showEditProjectModal: false,
  showAddTicketModal: false,
  showDeleteTicketModal: false,
  showEditTicketModal: false,
  showDeleteAccountModal: false,
  showEditAccountModal: false,
};

// MODALS REDUCER

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    // LOGIN MODAL
    case SHOW_LOGIN:
      return {
        ...state,
        showUserLoginModal: true,
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        showUserLoginModal: false,
      };
      // WELCOME MODAL
    case SHOW_WELCOME:
      return {
        ...state,
        showWelcomeModal: true,
      };
    case CLOSE_WELCOME:
      return {
        ...state,
        showWelcomeModal: false,
      };
      // HELP MODAL
    case SHOW_HELP:
      return {
        ...state,
        showHelpModal: true,
      };
    case CLOSE_HELP:
      return {
        ...state,
        showHelpModal: false,
      };
      // ADD PROJECT MODAL
    case SHOW_ADD_PROJECT:
      return {
        ...state,
        showAddProjectModal: true,
      };
    case CLOSE_ADD_PROJECT:
      return {
        ...state,
        showAddProjectModal: false,
      };
      // DELETE PROJECT MODAL
    case SHOW_DELETE_PROJECT:
      return {
        ...state,
        showDeleteProjectModal: true,
      };
    case CLOSE_DELETE_PROJECT:
      return {
        ...state,
        showDeleteProjectModal: false,
      };
      // EDIT PROJECT MODAL
    case SHOW_EDIT_PROJECT:
      return {
        ...state,
        showEditProjectModal: true,
      };
    case CLOSE_EDIT_PROJECT:
      return {
        ...state,
        showEditProjectModal: false,
      };
      // ADD TICKET MODAL
    case SHOW_ADD_TICKET:
      return {
        ...state,
        showAddTicketModal: true,
      };
    case CLOSE_ADD_TICKET:
      return {
        ...state,
        showAddTicketModal: false,
      };
      // DELETE TICKET MODAL
    case SHOW_DELETE_TICKET:
      return {
        ...state,
        showDeleteTicketModal: true,
      };
    case CLOSE_DELETE_TICKET:
      return {
        ...state,
        showDeleteTicketModal: false,
      };
      // EDIT TICKET MODAL
    case SHOW_EDIT_TICKET:
      return {
        ...state,
        showEditTicketModal: true,
      };
    case CLOSE_EDIT_TICKET:
      return {
        ...state,
        showEditTicketModal: false,
      };
      // DELETE ACCOUNT MODAL
    case SHOW_DELETE_ACCOUNT:
      return {
        ...state,
        showDeleteAccountModal: true,
      };
    case CLOSE_DELETE_ACCOUNT:
      return {
        ...state,
        showDeleteAccountModal: false,
      };
      // EDIT ACCOUNT MODAL
    case SHOW_EDIT_ACCOUNT:
      return {
        ...state,
        showEditAccountModal: true,
      };
    case CLOSE_EDIT_ACCOUNT:
      return {
        ...state,
        showEditAccountModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
