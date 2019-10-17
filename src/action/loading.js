import * as type from '../constants/index';

export const showLoading = ()=>{
    return {
        type: type.SHOW_LOADING
    }
}

export const hideLoading = ()=>{
    return {
        type: type.HIDE_LOADING
    }
}