import { getDataAPI } from '../../api/api';
import * as ACTIONS from "../constants/userContant";

export const getAllUser = (token) => async (dispatch) => {
    try {
        const res = await getDataAPI('getalluser', token);
        if (res.data.status === true) {
            dispatch({
                type: ACTIONS.GET_ALL_USER,
                payload: {
                    listUser: res.data.users,
                }
            });
            // localStorage.setItem('accessToken', JSON.stringify(res.data.token));
        } else {
            // dispatch({type: ACTIONS.LOGIN_ERROR, payload: {
            //     message: res.data.message,
            // }})
        }
    } catch (err) {
        console.log(err);
    }
}

export const getAllUserIsProvied = (userId, token) => async (dispatch) => {
    try {
        const res = await getDataAPI(`getalluserisprovied/${userId}`, token);
        if (res.data.status === true) {
            dispatch({
                type: ACTIONS.GET_ALL_USER_IS_PROVIED,
                payload: {
                    listUser: res.data.users,
                }
            });
        } else {
        }
    } catch (err) {
        console.log(err);
    }
}
