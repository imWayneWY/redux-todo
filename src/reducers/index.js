import {combineReducers} from 'redux';
import todos from './todo';
import setFilter from './setFilter';

export const RootReducer = combineReducers({
    todos,
    setFilter
});

