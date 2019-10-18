import * as type from '../../constants/index';

const initialState = {
    isShow: false,
    message: '',
    value: false
}


const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case type.SHOW_QUESTION:
            return {
                ...state,
                isShow: true,
                value: false,
                message: action.payload.msg
            }
        case type.HIDE_QUESTION:
            return {
                ...state,
                isShow: false,
                value: action.payload.value,
                message: ''
            }
        default:
            return state
    }
}

export default reducer;