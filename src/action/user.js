import * as type from '../constants';

export const fetchListUser = (param = {})=>{
    return {
        type: type.GET_LIST_USER,
        payload:{
            ...param
        }
    }
}

export const fetchListUserSuccess = res => {
    return {
        type: type.GET_LIST_USER_SUCCESS,
        payload:{
            res,
        }
    }
}

export const fetchListUserError = res => {
    return {
        type: type.GET_LIST_USER_ERROR,
        payload:{
            res,
        }
    }
}