import * as ACTIONS from '../constants/userContant';


const initialState = {
    articleView: '1',
    workingMode: '0',
    listUser: null,
};


const user = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ARTICLE_VIEW:
            return {
                ...state,
                articleView: action.payload.articleView,
            };
        case ACTIONS.WORKING_MODE:
            return {
                ...state,
                workingMode: action.payload.workingMode,
            };
        case ACTIONS.GET_ALL_USER:
            return {
                ...state,
                listUser: action.payload.listUser,
            };      
        
        default:
            return state;
    }
}
export default user;