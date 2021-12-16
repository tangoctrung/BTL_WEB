import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import mail from './mailReducer';
import viewPerson from './viewPersonReducer';
import addCode from './addCodeReducer';
import overView from './overViewReducer';
import openCensus from './openCensusReducer';

const rootReducer = combineReducers({
    auth,
    user,
    mail,
    viewPerson,
    addCode,
    overView,
    openCensus,
});

export default rootReducer;