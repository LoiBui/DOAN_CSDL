import * as type from '../constants';

const initialState = {
    isLoading: false,
}

const loading = (state = initialState, action)=>{
    switch (action.type) {
        case type.SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case type.HIDE_LOADING:
                return {
                    ...state,
                    isLoading: false
                }
        default:
            return state;
    }
}

export default loading