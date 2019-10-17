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



function *listUserSaga({payload}){
    let res = yield call(userApi.getListUser, payload);
    const {data} = res;
    if (data.error_code == 0){
        yield put(user.fetchListUserSuccess(data.data));
    }
}

function *root(){
    yield takeLatest(type.GET_LIST_USER, listUserSaga);
}

export default root;