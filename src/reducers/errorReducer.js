import {
    DEFAULT_ERROR_MESSAGE
} from '../actions/errorActions';

export const errorReducer = (state, action) => {
    if (!action.error) {
        return {
            ...state,
            error: null,
        };
    }

    return {
        ...state,
        error: {
            errorMessage: DEFAULT_ERROR_MESSAGE,
            ...action.payload.response.data,
        },
    };
};