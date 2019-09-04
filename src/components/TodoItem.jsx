import React, { Component } from 'react'
import { completeTodo } from '../redux/actions/todoContainerActions';
import { connect } from 'react-redux';

class TodoItem extends Component {
  render() {
    const { item, completeTodo } = this.props;

    return (
      <li onClick={() => completeTodo(item.id)}>
        {item.title}
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => {
      dispatch(completeTodo(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
