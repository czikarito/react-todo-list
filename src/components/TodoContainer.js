import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/todoContainerActions';

class TodoContainer extends Component {
  _handleCompleteTodo = () => (id) => {
    const editedTodods = this.state.items.map(item =>
      item.id === id ? { ...item, completed: true } : item
    )

    this.setState({
      items: editedTodods
    })
  }

  render() {
    const { todos, addTodo } = this.props;
    return (
      <div>
        <AddTodo onTodoAdd={addTodo}/>
        <TodoList items={todos} onCompleteTodo={this._handleCompleteTodo()}/>
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
