import * as ACTIONS from '../constants/addCodeContant';


const initialState = {
    error: "",
    errorDetail: "",
    success: "",
    city: [],
    district: [],
    ward: [],
    village: [],
};


const addCode = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.MESSAGE_ERROR:
            return {
                ...state,
                error: action.payload.error,
                errorDetail: action.payload.errorDetail,
            };
        case ACTIONS.MESSAGE_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
            };
        case ACTIONS.CLEAR_MESSAGE:
            return {
                ...state,
                error: '',
                errorDetail: '',
                success: '',        
            };
        case ACTIONS.GET_CITY:
            return {
                ...state,
                city: action.payload.city,
            };
        case ACTIONS.GET_DISTRICT:
            return {
                ...state,
                district: action.payload.district,
            };
        case ACTIONS.GET_WARD:
            return {
                ...state,
                ward: action.payload.ward,
            };
        case ACTIONS.GET_VILLAGE:
            return {
                ...state,
                village: action.payload.village,
            };
        
        default:
            return state;
    }
}
export default addCode;