import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import mail from './mailReducer';
import viewPerson from './viewPersonReducer';
import addCode from './addCodeReducer';
import overView from './overViewReducer';

const rootReducer = combineReducers({
    auth,
    user,
    mail,
    viewPerson,
    addCode,
    overView,
});

export default rootReducer;