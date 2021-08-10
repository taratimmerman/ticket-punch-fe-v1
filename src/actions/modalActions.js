// MODAL ACTION TYPES (CONSTANTS)

export const SHOW_LOGIN = 'SHOW_USER_LOGIN_MODAL';
export const CLOSE_LOGIN = 'CLOSE_USER_LOGIN_MODAL';

export const SHOW_ADD_PROJECT = 'SHOW_ADD_PROJECT_MODAL';
export const CLOSE_ADD_PROJECT = 'CLOSE_ADD_PROJECT_MODAL';

// MODAL ACTION CREATORS

export const openLoginModalAction = () => dispatch => {
    dispatch({ type: SHOW_LOGIN });
};

export const closeLoginModalAction = () => dispatch => {
    dispatch({ type: CLOSE_LOGIN });
};

export const openAddProjectModalAction = () => dispatch => {
    dispatch({ type: SHOW_ADD_PROJECT });
};

export const closeAddProjectModalAction = () => dispatch => {
    dispatch({ type: CLOSE_ADD_PROJECT });
};