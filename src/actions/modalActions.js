// MODAL ACTION TYPES (CONSTANTS)

export const SHOW_LOGIN = 'SHOW_USER_LOGIN_MODAL';
export const CLOSE_LOGIN = 'CLOSE_USER_LOGIN_MODAL';

// MODAL ACTIONS

export const openLoginModalAction = () => dispatch => {
    dispatch({ type: SHOW_LOGIN });
};

export const closeLoginModalAction = () => dispatch => {
    dispatch({ type: CLOSE_LOGIN });
};