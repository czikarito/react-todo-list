import React from 'react';
import { Link } from 'react-router-dom';

function TodoItem(props) {
  const { item, onCompleteTodo } = props;
  return (
    <li>
      <div className='item-title' onClick={() => onCompleteTodo(item.id)}>
        <h3>{item.title}</h3>
      </div>
      &nbsp;
      <div className='item-author'>{item.author}</div>
      &nbsp;
      <Link to={`/todo/${item.id}`}>
        <button>Edit</button>
      </Link>
    </li>
  );
}

export default TodoItem;
