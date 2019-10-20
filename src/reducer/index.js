import { combineReducers } from 'redux';
import revenue from './revenue';
import loading from './loading';
import notice from './notice';

const root = combineReducers({
    revenue,
    loading,
    notice
});

export default root;