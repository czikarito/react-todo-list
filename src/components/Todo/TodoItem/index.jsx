import React from 'react';
import { completeTodo } from '../../../store/todo/actions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

function TodoItem(props) {
  const { item, completeTodo } = props;
  return (
    <li>
      <div className='item-title' onClick={() => completeTodo(item.id)}>
        {item.title}
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

const mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => {
      dispatch(completeTodo(id));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TodoItem)
);
