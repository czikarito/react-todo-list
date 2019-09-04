import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions/todoContainerActions';
import TodoForm from '../../components/Todo/TodoForm';

class ScreensTodoAdd extends PureComponent {
  handleSave = (data) => {
    this.props.addTodo(data);
  }

  render() {
    return (
      <TodoForm onSave={this.handleSave}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: data => {
      dispatch(addTodo(data));
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ScreensTodoAdd));
