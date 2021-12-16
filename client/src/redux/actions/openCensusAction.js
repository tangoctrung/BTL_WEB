import { getDataAPI, postDataAPI, putDataAPI } from '../../api/api';
import * as ACTIONS from "../constants/openCensusContant";

export const getCodeNameOpenCensus = (codeId, token) => async (dispatch) => {
    try {
        const res = await getDataAPI('getallcode/' + codeId, token);
        if (res.data.status === true) {
            if (codeId === "00") {
                dispatch({type: ACTIONS.GET_CITY, payload: {city: res.data.data}})
                dispatch({type: ACTIONS.MESSAGE_DISTRICT, payload: {message: "Không có dữ liệu."}})
                dispatch({type: ACTIONS.MESSAGE_WARD, payload: {message: "Không có dữ liệu."}});
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: "Không có dữ liệu."}})
            } else if (codeId.length === 2 && codeId !== "00") {
                dispatch({type: ACTIONS.GET_DISTRICT, payload: {district: res.data.data}})
                dispatch({type: ACTIONS.MESSAGE_WARD, payload: {message: "Không có dữ liệu."}});
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: "Không có dữ liệu."}})
            } else if (codeId.length === 4 && codeId !== "00") {
                dispatch({type: ACTIONS.GET_WARD, payload: {ward: res.data.data}})
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: "Không có dữ liệu."}})
            } else if (codeId.length === 6 && codeId !== "00") {
                dispatch({type: ACTIONS.GET_VILLAGE, payload: {village: res.data.data}})
            }
        } else {
            if (codeId === "00") {
                dispatch({type: ACTIONS.MESSAGE_CITY, payload: {message: res.data.message}})
                dispatch({type: ACTIONS.MESSAGE_DISTRICT, payload: {message: res.data.message}})
                dispatch({type: ACTIONS.MESSAGE_WARD, payload: {message: res.data.message}});
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: res.data.message}})
            } else if (codeId.length === 2 && codeId !== "00") {
                dispatch({type: ACTIONS.MESSAGE_DISTRICT, payload: {message: res.data.message}})
                dispatch({type: ACTIONS.MESSAGE_WARD, payload: {message: res.data.message}});
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: res.data.message}})
            } else if (codeId.length === 4 && codeId !== "00") {
                dispatch({type: ACTIONS.MESSAGE_WARD, payload: {message: res.data.message}})
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: res.data.message}})
            } else if (codeId.length === 6 && codeId !== "00") {
                dispatch({type: ACTIONS.MESSAGE_VILLAGE, payload: {message: res.data.message}})
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export const getCitizenCodename = (codeName, level, token) => async (dispatch) => {
    
    try {
        if (level !== "" && codeName !== "") {
            const res = await getDataAPI(`getallcitizencode?codeName=${codeName}&level=${level}`, token);
            dispatch({type: ACTIONS.GET_CITIZEN_CODENAME, payload: {citizens: res.data.citizens}});
        }
    } catch (err) {
        console.log(err);
    }
}