import * as ACTIONS from '../constants/userContant';


const initialState = {
    articleView: '1',
    workingMode: '0',
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
        
        default:
            return state;
    }
}
export default user;