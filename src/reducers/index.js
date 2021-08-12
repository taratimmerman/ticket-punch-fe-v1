import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { modalReducer } from './modalReducer';
import { projectReducer } from './projectReducer';
import { registrationReducer } from './registrationReducer';
import { ticketReducer } from './ticketReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  loginReducer,
  modalReducer,
  projectReducer,
  registrationReducer,
  ticketReducer,
  userReducer
});

export default rootReducer;