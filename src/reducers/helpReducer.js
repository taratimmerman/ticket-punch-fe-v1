import {
  MSG_DEV_REQUEST,
  MSG_DEV_SUCCESS,
  MSG_DEV_FAILURE,
} from '../actions/helpActions';

// INITIAL HELP STATE
const initialMsgDevState = {
  status: '',
  success: null,
  error: null,
};

// HELP REDUCER
const helpReducer = (state = initialMsgDevState, action) => {
  switch (action.type) {
    case MSG_DEV_REQUEST:
      return {
        ...state,
        status: 'Pending...',
      };
    case MSG_DEV_SUCCESS:
      return {
        ...state,
        success: action.payload,
        status: 'Success',
      };
    case MSG_DEV_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    default:
      return state;
  }
};

export default helpReducer;
