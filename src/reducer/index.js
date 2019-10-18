import { combineReducers } from 'redux';
import revenue from './revenue';
import loading from './loading';
import question from './notice/question';

const root = combineReducers({
    revenue,
    loading,
    question
});

export default root;