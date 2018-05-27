import {combineReducers} from 'redux';
import todos from './todo';
import setFilter from './setFilter';

const rootReducer = combineReducers({
    todos,
    setFilter
});

export default rootReducer;