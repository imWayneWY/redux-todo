import React,{Component} from 'react';

class Todo extends Component {
    render(){
        return(
            <li
                onClick = {this.props.onClick}
                style = {{  
                    textDecoration: this.props.completed ? 'line-through' : 'none',  
                    cursor: this.props.completed ? 'default' : 'pointer',  
                    color: this.props.completed ? '#f00' : '#000'  
                }}  
 
            >
            </li>
        )
    }
}
export default Todo;
