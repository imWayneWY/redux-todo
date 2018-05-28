import {connect} from 'react-redux';  
import App from '../App';  
import {addTodo, toggleTodo, setVisibilityFilter, visibilityType} from '../actions/index';

const selectTodo = (todos, visibilityFilter) => {  
    switch (visibilityFilter) {  
        case visibilityType.SHOW_ALL:  
            return todos;  
        case visibilityType.SHOW_COMPLETED:  
            return todos.filter(todo => todo.completed);  
        case visibilityType.SHOW_ACTIVE:  
            return todos.filter(todo => !todo.completed);  
        default:  
            return todos;  
    }  
}  
  
const mapStatesToProps = (state) => {  
    return{
        todos: selectTodo(state.todos, state.setFilter),  
        visibilityFilter: state.setFilter
    }
} 

const mapDispatchToProps =  (dispatch) => {
    return{
        dispatchAdd: (text) => {dispatch(addTodo(text))},
        dispatchToggle: (index) => {dispatch(toggleTodo(index))},
        dispatchSetVisibility: (filter) => {dispatch(setVisibilityFilter(filter))}
    }
}
const Container = connect(  
    mapStatesToProps,
    mapDispatchToProps  
)(App);  
  
export default Container;  