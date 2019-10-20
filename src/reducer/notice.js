import * as types from '../constants/index';

const initialState = {
    isShow: false,
    type: 'success',
    msg: ''
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case types.SHOW_NOTICE:
            let {type, msg} = action.payload
            return {
                ...state,
                isShow: true,
                type,
                msg
            }

        case types.HIDE_NOTICE:{
            return {
                ...state,
                isShow: false,
                msg: ''
            }
        }
    
        default:
            return state
    }
}

export default reducer