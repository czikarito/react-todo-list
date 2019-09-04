import React from 'react'
import { completeTodo } from '../../redux/actions/todoContainerActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

function TodoItem(props) {
  const { item, completeTodo } = props;
  return (
    <li>
      <div onClick={() => completeTodo(item.id)}>
        {item.title}
      </div>
      &nbsp;
      {item.author}
      &nbsp;
      <Link to={`/todo/${item.id}`} >
        <button>
          Edit
        </button>
      </Link>
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

export default withRouter(connect(null, mapDispatchToProps)(TodoItem));

