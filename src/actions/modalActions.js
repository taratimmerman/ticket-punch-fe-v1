// MODAL ACTION TYPES (CONSTANTS)

export const SHOW_LOGIN = 'SHOW_USER_LOGIN_MODAL';
export const CLOSE_LOGIN = 'CLOSE_USER_LOGIN_MODAL';

export const SHOW_WELCOME = 'SHOW_USER_WELCOME_MODAL';
export const CLOSE_WELCOME = 'CLOSE_USER_WELCOME_MODAL';

export const SHOW_HELP = 'SHOW_HELP_MODAL';
export const CLOSE_HELP = 'CLOSE_HELP_MODAL';

export const SHOW_ADD_PROJECT = 'SHOW_ADD_PROJECT_MODAL';
export const CLOSE_ADD_PROJECT = 'CLOSE_ADD_PROJECT_MODAL';

export const SHOW_DELETE_PROJECT = 'SHOW_DELETE_PROJECT_MODAL';
export const CLOSE_DELETE_PROJECT = 'CLOSE_DELETE_PROJECT_MODAL';

export const SHOW_EDIT_PROJECT = 'SHOW_EDIT_PROJECT_MODAL';
export const CLOSE_EDIT_PROJECT = 'CLOSE_EDIT_PROJECT_MODAL';

export const SHOW_ADD_TICKET = 'SHOW_ADD_TICKET_MODAL';
export const CLOSE_ADD_TICKET = 'CLOSE_ADD_TICKET_MODAL';

export const SHOW_DELETE_TICKET = 'SHOW_DELETE_TICKET_MODAL';
export const CLOSE_DELETE_TICKET = 'CLOSE_DELETE_TICKET_MODAL';

export const SHOW_EDIT_TICKET = 'SHOW_EDIT_TICKET_MODAL';
export const CLOSE_EDIT_TICKET = 'CLOSE_EDIT_TICKET_MODAL';

export const SHOW_DELETE_ACCOUNT = 'SHOW_DELETE_ACCOUNT_MODAL';
export const CLOSE_DELETE_ACCOUNT = 'CLOSE_DELETE_ACCOUNT_MODAL';

export const SHOW_EDIT_ACCOUNT = 'SHOW_EDIT_ACCOUNT_MODAL';
export const CLOSE_EDIT_ACCOUNT = 'CLOSE_EDIT_ACCOUNT_MODAL';

// MODAL ACTION CREATORS

// Login Modal
export const openLoginModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_LOGIN });
};

export const closeLoginModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_LOGIN });
};

// Welcome Modal
export const openWelcomeModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_WELCOME });
};

export const closeWelcomeModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_WELCOME });
};

// Help Modal
export const openHelpModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_HELP });
};

export const closeHelpModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_HELP });
};

// Add Project Modal
export const openAddProjectModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_ADD_PROJECT });
};

export const closeAddProjectModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_ADD_PROJECT });
};

// Delete Project Modal
export const openDeleteProjectModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_DELETE_PROJECT });
};

export const closeDeleteProjectModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_DELETE_PROJECT });
};

// Edit Project Modal
export const openEditProjectModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_EDIT_PROJECT });
};

export const closeEditProjectModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_EDIT_PROJECT });
};

// Add Ticket Modal
export const openAddTicketModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_ADD_TICKET });
};

export const closeAddTicketModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_ADD_TICKET });
};

// Delete Ticket Modal
export const openDeleteTicketModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_DELETE_TICKET });
};

export const closeDeleteTicketModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_DELETE_TICKET });
};

// Edit Ticket Modal
export const openEditTicketModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_EDIT_TICKET });
};

export const closeEditTicketModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_EDIT_TICKET });
};

// Delete Account Modal
export const openDeleteAccountModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_DELETE_ACCOUNT });
};

export const closeDeleteAccountModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_DELETE_ACCOUNT });
};

// Edit Account Modal
export const openEditAccountModalAction = () => (dispatch) => {
  dispatch({ type: SHOW_EDIT_ACCOUNT });
};
export const closeEditAccountModalAction = () => (dispatch) => {
  dispatch({ type: CLOSE_EDIT_ACCOUNT });
};
