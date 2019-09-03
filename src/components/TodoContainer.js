import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux'
import { addTodo, completeTodo } from '../redux/actions/todoContainerActions';

class TodoContainer extends Component {
  render() {
    const { todos, addTodo, completeTodo } = this.props;
    return (
      <div>
        <AddTodo onTodoAdd={addTodo}/>
        <TodoList items={todos} onCompleteTodo={completeTodo}/>
      </div>
    );
  }
}

const mapStateToProps = ({todos}) => {
  return {
    todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => {
      dispatch(addTodo(value));
    },
    completeTodo: id => {
      dispatch(completeTodo(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
