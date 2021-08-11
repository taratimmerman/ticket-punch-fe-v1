// MODAL ACTION TYPES (CONSTANTS)

export const SHOW_LOGIN = 'SHOW_USER_LOGIN_MODAL';
export const CLOSE_LOGIN = 'CLOSE_USER_LOGIN_MODAL';

export const SHOW_ADD_PROJECT = 'SHOW_ADD_PROJECT_MODAL';
export const CLOSE_ADD_PROJECT = 'CLOSE_ADD_PROJECT_MODAL';

export const SHOW_DELETE_PROJECT = 'SHOW_DELETE_PROJECT_MODAL';
export const CLOSE_DELETE_PROJECT = 'CLOSE_DELETE_PROJECT_MODAL';

export const SHOW_EDIT_PROJECT = 'SHOW_EDIT_PROJECT_MODAL';
export const CLOSE_EDIT_PROJECT = 'CLOSE_EDIT_PROJECT_MODAL';


// MODAL ACTION CREATORS

// Login Modal
export const openLoginModalAction = () => dispatch => {
    dispatch({ type: SHOW_LOGIN });
};

export const closeLoginModalAction = () => dispatch => {
    dispatch({ type: CLOSE_LOGIN });
};

// Add Project Modal
export const openAddProjectModalAction = () => dispatch => {
    dispatch({ type: SHOW_ADD_PROJECT });
};

export const closeAddProjectModalAction = () => dispatch => {
    dispatch({ type: CLOSE_ADD_PROJECT });
};

// Delete Project Modal
export const openDeleteProjectModalAction = () => dispatch => {
    dispatch({ type: SHOW_DELETE_PROJECT });
};

export const closeDeleteProjectModalAction = () => dispatch => {
    dispatch({ type: CLOSE_DELETE_PROJECT});
};

// Edit Project Modal
export const openEditProjectModalAction = () => dispatch => {
    dispatch({ type: SHOW_EDIT_PROJECT });
};

export const closeEditProjectModalAction = () => dispatch => {
    dispatch({ type: CLOSE_EDIT_PROJECT });
};