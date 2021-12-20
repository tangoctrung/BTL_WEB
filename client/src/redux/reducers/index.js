import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import mail from './mailReducer';
import viewPerson from './viewPersonReducer';
import addCode from './addCodeReducer';
import overView from './overViewReducer';
import openCensus from './openCensusReducer';
import post from './postReducer';

const rootReducer = combineReducers({
    auth,
    user,
    mail,
    viewPerson,
    addCode,
    overView,
    openCensus,
    post,
});

export default rootReducer;