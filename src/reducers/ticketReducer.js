// IMPORTING TICKET ACTION CONSTANTS

import {
    GET_ALL_REQUEST,
    GET_ALL_SUCCESS,
    GET_ALL_FAILURE,
    GET_TICKET_REQUEST,
    GET_TICKET_SUCCESS,
    GET_TICKET_FAILURE,
    CREATE_TICKET_REQUEST,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAILURE,
    UPDATE_TICKET_REQUEST,
    UPDATE_TICKET_SUCCESS,
    UPDATE_TICKET_FAILURE,
    DELETE_TICKET_REQUEST,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_FAILURE,
    TARGET_TICKET
} from '../actions/ticketActions';

// INITIAL TICKET STATE

const initialTicketState = {
    tickets: [],
    loading: false,
    status: '',
    error: null,
    ticketId: 0,
    ticketTitle: '',
    ticketDescription: '',
    ticketStatus: '',
    ticketBug: false,
    ticketProjectId: 0
};

// TICKET REDUCER

export const ticketReducer = (state = initialTicketState, action) => {
    switch (action.type) {
        // GET ALL TICKETS BY USER
        case GET_ALL_REQUEST:
            return {
                ...state,
                loading: true,
                status: 'Pending...'
            };
        case GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                tickets: action.payload,
                status: 'Success'
            };
        case GET_ALL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                status: 'Failed'
            };
        // GET TICKET BY ID
        case GET_TICKET_REQUEST:
            return {
                ...state,
                loading: true,
                status: 'Pending...'
            };
        case GET_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                tickets: action.payload,
                status: 'Success'
            };
        case GET_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                status: 'Failed'
            };
        // CREATE TICKET
        case CREATE_TICKET_REQUEST:
            return {
                ...state,
                loading: true,
                status: 'Pending...'
            };
        case CREATE_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                status: 'Success'
            };
        case CREATE_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                status: 'Failed'
            };
        // UPDATE TICKET BY ID
        case UPDATE_TICKET_REQUEST:
            return {
                ...state,
                loading: true,
                status: 'Pending...'
            };
        case UPDATE_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                status: 'Success'
            };
        case UPDATE_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                status: 'Failed'
            };
        // DELET TICKET BY ID
        case DELETE_TICKET_REQUEST:
            return {
                ...state,
                loading: true,
                status: 'Pending...'
            };
        case DELETE_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                status: 'Success'
            };
        case DELETE_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                status: 'Failed'
            };
        // TARGET TICKET
        case TARGET_TICKET:
            return {
                ...state,
                ticketId: action.ticketId,
                ticketTitle: action.ticketTitle,
                ticketDescription: action.ticketDescription,
                ticketStatus: action.ticketStatus,
                ticketBug: action.ticketBug,
                ticketProjectId: action.ticketProjectId
            };
        default:
            return state;
    }
};