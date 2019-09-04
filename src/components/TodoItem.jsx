import React from 'react'
import { completeTodo } from '../redux/actions/todoContainerActions';
import { connect } from 'react-redux';


function TodoItem(props) {
  return (
    <li onClick={() => props.completeTodo(props.item.id)}>
    {props.item.title}
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

