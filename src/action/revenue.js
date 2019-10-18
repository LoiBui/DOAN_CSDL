import * as type from '../constants';

export const fetchListRevenue = (param)=>{
    return {
        type: type.GET_LIST_REVENUE,
        payload:{
            ...param
        }
    }
}

export const fetchListRevenueSuccess = res => {
    return {
        type: type.GET_LIST_REVENUE_SUCCESS,
        payload:{
            ...res,
        }
    }
}

export const fetchListRevenueError = res => {
    return {
        type: type.GET_LIST_REVENUE_ERROR,
        payload:{
            ...res,
        }
    }
}

export const deleteRevenue = param=>{
    return {
        type: type.DELETE_REVENUE,
        payload:{
            ...param
        }
    }
}


export const deleteRevenueSuccess = res=>{
    return {
        type: type.DELETE_REVENUE_SUCCESS,
        payload:{
            ...res
        }
    }
}

export const deleteRevenueError = res=>{
    return {
        type: type.DELETE_REVENUE_ERROR,
        payload:{
            ...res
        }
    }
}