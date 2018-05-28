import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

class App extends Component {
  render() {
    const {todos,visibilityFilter,dispatchAdd,dispatchToggle,dispatchSetVisiblity} = this.props;

    return (
    <div className="App">
      <AddTodo 
        onAddClick = {dispatchAdd}
      />
      <Filter 
        filter = {visibilityFilter}
        onFilterChange = {dispatchSetVisiblity}
      />
      <TodoList 
        todos = {todos}
        onToggleClick = {dispatchToggle}
      />
    </div>
    );
  }
}

export default App;
