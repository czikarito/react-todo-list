import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  handleCompleteTodo(id) {
    this.props.onCompleteTodo(id);
  }
  render() {
    return (
      <div>

        <ul>
          {this.props.items.map((item) =>
            !item.completed &&
              <TodoItem
                item={item}
                key={item.id}
                onCompleteTodo={() => this.handleCompleteTodo(item.id)}
              />
          )}
        </ul>
      </div>
    )
  }
}
