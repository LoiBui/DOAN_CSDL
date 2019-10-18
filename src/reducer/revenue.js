import * as type from '../constants/index'
const initialState = {
    revenues: [],
    total: '',
    current_page: ''
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case type.GET_LIST_REVENUE_SUCCESS:
            let {data, total, current_page} = action.payload;
            return {
                ...state,
                revenues: data,
                total: total,
                current_page: current_page
            }
        default:
            return state;
    }
}

export default reducer;