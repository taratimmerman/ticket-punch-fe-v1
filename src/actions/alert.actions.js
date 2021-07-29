import { alertConstants } from '../constants/alert.constants';

export const alertActions = {
  successMessage,
  errorMessage,
  clearMessage
};

const successMessage = (message) => ({
  type: alertConstants.SUCCESS,
  payload: message
});

const errorMessage = (message) => ({
  type: alertConstants.ERROR,
  payload: message
});

const clearMessage = () => ({
  type: alertConstants.CLEAR
});