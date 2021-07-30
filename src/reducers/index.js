import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { registrationReducer } from './registrationReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  userReducer
});

export default rootReducer;