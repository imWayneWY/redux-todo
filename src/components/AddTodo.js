import React, {Component} from 'react';

class AddTodo extends Component {
    render(){
        let input;
        return(
            <form onSubmit = {
                (e) => {
                    if(input.value.trim() === ''){
                        return;
                    }
                    e.preventDefault();
                    this.props.onAddClick(input.value);
                    input.value = '';
                }
            }>
                <input type="text" required ref = {node => {
                    input = node;
                } }/>
                <input type="submit" value="add"/>
            </form>
        );
    }
}

export default AddTodo;