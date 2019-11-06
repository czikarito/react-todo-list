import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, _nextState) {
    return this.props.item != nextProps.item;
  }

  render() {
    const { item, onCompleteTodo } = this.props;

    return (
      <li className='todo'>
        <div className='item-title' onClick={() => onCompleteTodo(item.id)}>
          <h3>{item.title}</h3>
        </div>
        &nbsp;
        <div className='item-author'>{item.author}</div>
        &nbsp;
      </li>
    );
  }
}
