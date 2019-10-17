import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';

const root = combineReducers({
    user,
    loading
});

export default root;