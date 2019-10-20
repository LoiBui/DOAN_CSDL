import * as type from '../constants/index';
import _ from 'lodash';

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

        case type.DELETE_REVENUE_SUCCESS:
            let {id} = action.payload;
            return {
                ...state,
                revenues: _.filter(state.revenues, item=>{
                    return item.id !== id;
                }),
                total: state.total--
            }
        default:
            return state;
    }
}

export default reducer;