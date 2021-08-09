import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { modalsReducer } from './modalsReducer';
import { registrationReducer } from './registrationReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  loginReducer,
  modalsReducer,
  registrationReducer,
  userReducer
});

export default rootReducer;