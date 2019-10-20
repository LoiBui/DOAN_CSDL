import {
    call,
    delay,
    put,
    select,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import * as revenue from '../action/revenue';
import * as type from '../constants/index';
import * as revenueApi from '../api/revenue';
import * as loading from '../action/loading';
import * as notice from '../action/notice';



function *listRevenueSaga({payload}){
    let res = yield call(revenueApi.getListRevenue, payload);
    

    //fake loading
    yield put(loading.showLoading());

    let timeLoad = true;
    setTimeout(()=>{timeLoad = false}, 1000);
    if (timeLoad) yield delay(1000);

    const {data} = res;
    if (data.error_code === 0){
        yield put(revenue.fetchListRevenueSuccess(data.data));
    }

    
    
    yield put(loading.hideLoading());
}

function *deleteRevenue({payload}){
    
    let res = yield call(revenueApi.deleteRevenueById, payload);
    let {error_code} = res.data;
    
    if(error_code === 0){
        yield put(revenue.deleteRevenueSuccess(payload));

        let noticeRes = {
            type: 'success',
            msg: 'Xóa doanh thu thành công !!!'
        }

        yield put(notice.showNotice(noticeRes));
    }else{
        let noticeRes = {
            type: 'error',
            msg: 'Xóa doanh thu thất bại !!!'
        }

        yield put(notice.showNotice(noticeRes));
    }
}

function *root(){
    yield takeLatest(type.GET_LIST_REVENUE, listRevenueSaga);
    yield takeEvery(type.DELETE_REVENUE, deleteRevenue);
}

export default root;