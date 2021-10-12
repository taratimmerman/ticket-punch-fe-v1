import { API_URL, axiosWithAuth } from '../helpers/axiosWithAuth';
import { getUserId } from '../helpers/getUserInfo';
import {
  closeAddTicketModalAction,
  closeDeleteTicketModalAction,
  closeEditTicketModalAction,
} from './modalActions';

// TICKET ACTION TYPES (CONSTANTS)

export const GET_ALL_REQUEST = 'TICKETS_GET_ALL_REQUEST';
export const GET_ALL_SUCCESS = 'TICKETS_GET_ALL_SUCCESS';
export const GET_ALL_FAILURE = 'TICKETS_GET_ALL_REQUEST';

export const GET_TICKET_REQUEST = 'TICKETS_GET_TICKET_REQUEST';
export const GET_TICKET_SUCCESS = 'TICKETS_GET_TICKET_SUCCESS';
export const GET_TICKET_FAILURE = 'TICKETS_GET_TICKET_FAILURE';

export const CREATE_TICKET_REQUEST = 'TICKETS_CREATE_TICKET_REQUEST';
export const CREATE_TICKET_SUCCESS = 'TICKETS_CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_FAILURE = 'TICKETS_CREATE_TICKET_FAILURE';

export const UPDATE_TICKET_REQUEST = 'TICKETS_UPDATE_TICKET_REQUEST';
export const UPDATE_TICKET_SUCCESS = 'TICKETS_UPDATE_TICKET_SUCCESS';
export const UPDATE_TICKET_FAILURE = 'TICKETS_UPDATE_TICKET_FAILURE';

export const DELETE_TICKET_REQUEST = 'TICKETS_DELETE_TICKET_REQUEST';
export const DELETE_TICKET_SUCCESS = 'TICKETS_DELETE_TICKET_SUCCESS';
export const DELETE_TICKET_FAILURE = 'TICKETS_DELETE_TICKET_FAILURE';

export const TARGET_TICKET = 'TICKETS_TARGET_TICKET';

// TICKET ACTION CREATORS

export const getAllTicketsByUserAction = (userId) => (dispatch) => {
  dispatch({ type: GET_ALL_REQUEST });

  axiosWithAuth()
    .get(`${API_URL}/tickets/user/${userId}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_FAILURE,
        payload: err.message,
      });
    });
};

export const getTicketByIdAction = (ticketId) => (dispatch) => {
  dispatch({ type: GET_TICKET_REQUEST });

  axiosWithAuth()
    .get(`${API_URL}/tickets/${ticketId}`)
    .then((res) => {
      dispatch({
        type: GET_TICKET_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TICKET_FAILURE,
        payload: err.message,
      });
    });
};

export const createTicketAction = (
  userId,
  title,
  description,
  status,
  bug,
  projectId,
) => (dispatch) => {
  dispatch({ type: CREATE_TICKET_REQUEST });

  axiosWithAuth()
    .post(`${API_URL}/tickets`, {
      userId, title, description, status, bug, projectId,
    })
    .then((res) => {
      dispatch({
        type: CREATE_TICKET_SUCCESS,
        payload: res.data,
      });
      dispatch(closeAddTicketModalAction());
      dispatch(getAllTicketsByUserAction(getUserId()));
    })
    .catch((err) => {
      dispatch({
        type: CREATE_TICKET_FAILURE,
        payload: err.message,
      });
    });
};

export const editTicketAction = (
  id,
  userId,
  projectId,
  title,
  description,
  status, bug,
  archived,
) => (dispatch) => {
  dispatch({ type: UPDATE_TICKET_REQUEST });

  axiosWithAuth()
    .put(`${API_URL}/tickets/${id}`, {
      userId, projectId, title, description, status, bug, archived,
    })
    .then((res) => {
      dispatch({
        type: UPDATE_TICKET_SUCCESS,
        payload: res.data,
      });
      dispatch(closeEditTicketModalAction());
      dispatch(getAllTicketsByUserAction(getUserId()));
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_TICKET_FAILURE,
        payload: err.message,
      });
    });
};

export const deleteTicketAction = (ticketId) => (dispatch) => {
  dispatch({ type: DELETE_TICKET_REQUEST });

  axiosWithAuth()
    .delete(`${API_URL}/tickets/${ticketId}`)
    .then((res) => {
      dispatch({
        type: DELETE_TICKET_SUCCESS,
        payload: res.data,
      });
      dispatch(closeDeleteTicketModalAction());
      dispatch(getAllTicketsByUserAction(getUserId()));
    })
    .catch((err) => {
      dispatch({
        type: DELETE_TICKET_FAILURE,
        payload: err.message,
      });
    });
};

export const targetTicketAcion = (
  ticketId,
  ticketTitle,
  ticketDescription,
  ticketStatus,
  ticketBug,
  ticketArchived,
  ticketProjectId,
) => (dispatch) => {
  dispatch({
    type: TARGET_TICKET,
    ticketId,
    ticketTitle,
    ticketDescription,
    ticketStatus,
    ticketBug,
    ticketArchived,
    ticketProjectId,
  });
};
