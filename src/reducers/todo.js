import {ADD_TODO, TOGGLE_TODO} from '../actions/index';
let todoIndex = 0;
const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    index: todoIndex++,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(action.index === index){
                    return Object.assign({}, todo,{
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todos;