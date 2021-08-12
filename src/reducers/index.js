import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { modalsReducer } from './modalsReducer';
import { projectReducer } from './projectReducer';
import { registrationReducer } from './registrationReducer';
import { ticketReducer } from './ticketReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  loginReducer,
  modalsReducer,
  projectReducer,
  registrationReducer,
  ticketReducer,
  userReducer
});

export default rootReducer;