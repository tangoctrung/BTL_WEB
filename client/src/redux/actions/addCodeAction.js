import { getDataAPI, postDataAPI, putDataAPI } from '../../api/api';
import * as ACTIONS from "../constants/addCodeContant";



export const provideCode = (data, token) => async (dispatch) => {
    try {
        // console.log(data, token);
        const res = await postDataAPI('addcode', data, token);
        if (res.data.status === true) {
            dispatch({type: ACTIONS.MESSAGE_SUCCESS, payload: {
                success: res.data.message,
            }})
        } else {
            dispatch({type: ACTIONS.MESSAGE_ERROR, payload: {
                error: res.data.message,
                errorDetail: res.data.messageDetail,
            }});
        }

    } catch (err) {
        console.log(err);
    }
}
