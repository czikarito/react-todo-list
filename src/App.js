import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       items: [
        {
          id: 1,
          title: "Clean a room",
          completed: false
        },
        {
          id: 2,
          title: "Buy a milk",
          completed: false
        },
        {
          id: 3,
          title: "Go out with the dog",
          completed: false
        }
      ]
    }
  }

  _handleCompleteTodo = () => (id) => {
    const editedTodods = this.state.items.map(item =>
      item.id === id ? { ...item, completed: true } : item
    )

    this.setState({
      items: editedTodods
    })
  }

  _handleTodoAdd = () => (value) => {
    const newTodo = {
      id: Math.random(),
      title: value,
      completed: false
    }

    this.setState({
      items: [...this.state.items, newTodo ]
    })
  }

  render() {
    return (
      <div>
        <AddTodo onTodoAdd={this._handleTodoAdd()}/>
        <TodoList items={this.state.items} onCompleteTodo={this._handleCompleteTodo()}/>
      </div>
    );
  }
}

export default App;
