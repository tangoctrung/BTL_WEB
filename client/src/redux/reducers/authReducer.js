import * as ACTIONS from '../constants/authContant';


const initialState = {
    accessToken: JSON.parse(localStorage.getItem("accessToken")) || null,
    user: null,
    messageRegister: "",
    messageLogin: "",
    isLoading: false,
};


const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN_START:
            return {
                ...state,
                isLoading: true,
            };
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                user: action.payload.user,
                isLoading: false,
            };
        case ACTIONS.LOGIN_ERROR:
            return {
                ...state,
                messageLogin: action.payload.message,
                isLoading: false,
            };
        case ACTIONS.REGISTER_START:
            return {
                ...state,
                isLoading: true,
            };
        case ACTIONS.REGISTER_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                user: action.payload.user,
                isLoading: false,
            };
        case ACTIONS.REGISTER_ERROR:
            return {
                ...state,
                messageRegister: action.payload.message,
                isLoading: false,
            };
        case ACTIONS.CLEAR_MESSAGE:
            return {
                ...state,
                messageRegister: '',
                messageLogin: '',
            };
        case ACTIONS.GET_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case ACTIONS.LOGOUT: 
            return {
                ...state,
                user: null,
                accessToken: null,
            }
        default:
            return state;
    }
}
export default auth;