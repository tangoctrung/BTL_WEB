import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import mail from './mailReducer';

const rootReducer = combineReducers({
    auth,
    user,
    mail,
});

export default rootReducer;