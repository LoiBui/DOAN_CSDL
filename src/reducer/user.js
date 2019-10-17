import * as type from '../constants/index'
const initialState = {
    users: [],
    total: '',
    current_page: ''
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case type.GET_LIST_USER_SUCCESS:
            let {data, total, current_page} = action.payload;
            return {
                ...state,
                users: data,
                total: total,
                current_page: current_page
            }
        default:
            return state;
    }
}

export default reducer;