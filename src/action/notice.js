import * as type from '../constants/index';

export const showNotice = (param)=>{
    return {
        type: type.SHOW_NOTICE,
        payload:{
            ...param
        }
    }
}

export const hideNotice = ()=>{
    return {
        type: type.HIDE_NOTICE
    }
}