import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import mail from './mailReducer';
import viewPerson from './viewPersonReducer';

const rootReducer = combineReducers({
    auth,
    user,
    mail,
    viewPerson,
});

export default rootReducer;