import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { item, onCompleteTodo } = this.props;

    return (
      <li onClick={() => onCompleteTodo(item.id)}>
        {item.title}
      </li>
    )
  }
}
