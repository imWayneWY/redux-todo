import React,{Component} from 'react';
import Todo from './Todo';

class TodoList extends Component{
    render(){
        if(this.props.todos){
            return(
                <ul>
                {
                    this.props.todos.map((todo,index) =>( 
                        <Todo key={index}
                        {...todo}
                        onClick={()=>{
                            this.props.onToggleClick(index)
                        }}/>
                    ))
                }
                </ul>
                );
        }
        else{
            return(<div>There is no item.</div>);
        }
    };
}

export default TodoList;