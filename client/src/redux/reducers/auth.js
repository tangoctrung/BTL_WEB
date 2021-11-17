import { LOGIN, LOGOUT } from '../constants/authContant';

const initialState = {
    username: "",
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                username: action.payload
            };
        case LOGOUT: 
            return {
                username: "",
            }
        default:
            return state;
    }
}
export default auth;