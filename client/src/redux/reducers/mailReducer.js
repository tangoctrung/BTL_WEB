import * as ACTIONS from '../constants/mailContant';


const initialState = {
    emailIsOpen: null,
    isOpenSendMail: false,
};


const mail = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.EMAIL_IS_OPEN:
            return {
                ...state,
                emailIsOpen: action.payload.mail,
            };
        case ACTIONS.CLEAR_EMAIL_IS_OPEN:
            return {
                ...state,
                emailIsOpen: null,
            };
        case ACTIONS.OPEN_SEND_MAIL:
            return {
                ...state,
                isOpenSendMail: true,
            };
        case ACTIONS.CLOSE_SEND_MAIL:
            return {
                ...state,
                isOpenSendMail: false,
            };   
        default:
            return state;
    }
}
export default mail;