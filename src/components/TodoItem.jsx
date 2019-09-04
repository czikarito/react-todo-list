import React from 'react'
import { completeTodo } from '../redux/actions/todoContainerActions';
import { connect } from 'react-redux';


function TodoItem(props) {
  const { item, completeTodo } = props;
  return (
    <li onClick={() => completeTodo(item.id)}>
      {item.title}
      &nbsp;
      {item.author}
  </li>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => {
      dispatch(completeTodo(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);

