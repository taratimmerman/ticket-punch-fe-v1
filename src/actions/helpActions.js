import axios from 'axios';

import { closeHelpModalAction } from './modalActions';

const webHookURL = 'https://hooks.slack.com/services/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';

// HELP ACTION TYPES
export const MSG_DEV_REQUEST = 'HELP_MSG_DEV_REQUEST';
export const MSG_DEV_SUCCESS = 'HELP_MSG_DEV_SUCCESS';
export const MSG_DEV_FAILURE = 'HELP_MSG_DEV_REQUEST';

// HELP ACTION CREATORS
export const msgDevAction = (name, email, question) => (dispatch) => {
  dispatch({ type: MSG_DEV_REQUEST });

  const data = {
    text: `NAME: ${name}\n EMAIL: ${email}\n MESSAGE: ${question}`,
  };

  axios
    .post(webHookURL, JSON.stringify(data), {
      withCredentials: false,
      // eslint-disable-next-line no-shadow
      transformRequest: [(data, headers) => {
        // eslint-disable-next-line no-param-reassign
        delete headers.post['Content-Type'];
        return data;
      }],
    })
    .then((res) => {
      dispatch({
        type: MSG_DEV_SUCCESS,
        payload: res.data,
      });
      closeHelpModalAction();
    })
    .catch((err) => {
      dispatch({
        type: MSG_DEV_FAILURE,
        payload: err.message,
      });
    });
};
