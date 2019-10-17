import {
    call,
    delay,
    fork,
    put,
    select,
    take,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import * as user from '../action/user';
import * as type from '../constants/index';
import * as userApi from '../api/user';
import * as loading from '../action/loading';



function *listUserSaga({payload}){
    let res = yield call(userApi.getListUser, payload);

    yield put(loading.showLoading());
    const {data} = res;
    if (data.error_code === 0){
        yield put(user.fetchListUserSuccess(data.data));
    }

    let timeLoad = true;
    setTimeout(()=>{timeLoad = false}, 1000);
    if (timeLoad) yield delay(1000);
    yield put(loading.hideLoading());
}

function *root(){
    yield takeLatest(type.GET_LIST_USER, listUserSaga);
}

export default root;