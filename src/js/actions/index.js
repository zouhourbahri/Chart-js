import {GET_ELEMENTS_SUCCESS , GET_ELEMENTS_FAIL} from "../constantes/actionTypes";
import axios from 'axios';

export const getElement = () => async (dispatch) => {
    try {
        const newElement = await axios.get('https://countly.inku.be/?idSite=1&period=range&date=2020-08-01,today&format=json&lastMinutes=15&module=API&token_auth=5fa592c90a4415f2fd41f0852cec602f&method=Live.getCounters');
        console.log("newElement", newElement);
        dispatch({
            type: GET_ELEMENTS_SUCCESS,
            payload: newElement,
        });
    } catch (error) {
        dispatch({
            type:GET_ELEMENTS_FAIL,
            payload: error,
        });
    }
};