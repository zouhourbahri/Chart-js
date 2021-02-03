import {GET_ELEMENTS_SUCCESS , GET_ELEMENTS_FAIL} from "../constantes/actionTypes";
const initialState={
    visitors:null,
};

const visitorReducer = (state=initialState , {type, payload}) => {
    switch (type) {
        case GET_ELEMENTS_SUCCESS :
            return {
                visitors: payload,
            }
        default:
            return state;
    }
}

export default visitorReducer;