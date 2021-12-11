import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import mail from './mailReducer';
import viewPerson from './viewPersonReducer';
import addCode from './addCodeReducer';

const rootReducer = combineReducers({
    auth,
    user,
    mail,
    viewPerson,
    addCode,
});

export default rootReducer;