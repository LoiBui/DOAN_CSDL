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
import * as messageQuestion from '../action/notice/question';



function *listRevenueSaga({payload}){
    let res = yield call(revenueApi.getListRevenue, payload);
    
    yield put(loading.showLoading());
    const {data} = res;
    if (data.error_code === 0){
        yield put(revenue.fetchListRevenueSuccess(data.data));
    }

    let timeLoad = true;
    setTimeout(()=>{timeLoad = false}, 1000);
    if (timeLoad) yield delay(1000);
    yield put(loading.hideLoading());
}

function *deleteRevenue({payload}){

    yield put(messageQuestion.showMessageQuestion("Bạn có chắc chắn muốn xóa không ?"))
    let resultMsg = yield select(state=>state.question);
    console.log(resultMsg);
}

function *root(){
    yield takeLatest(type.GET_LIST_REVENUE, listRevenueSaga);
    yield takeEvery(type.DELETE_REVENUE, deleteRevenue);
}

export default root;