import * as type from '../../constants/index';

export const showMessageQuestion = msg => {
    return {
        type: type.SHOW_QUESTION,
        payload:{
            msg
        }
    }
}

export const hideMessageQuestion = (value) => {
    return {
        type: type.HIDE_QUESTION,
        payload:{
            value
        }
    }
}