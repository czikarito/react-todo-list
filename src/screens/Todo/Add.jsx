import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addTodo } from '../../store/todo/actions';
import TodoForm from '../../components/Todo/TodoForm';
import { UserList } from '../../components/UserList';

class ScreensTodoAdd extends PureComponent {
  handleSave = data => {
    this.props.addTodo(data);
  };

  render() {
    return (
      <div>
        <TodoForm onSave={this.handleSave} />
        <UserList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: data => {
      dispatch(addTodo(data));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ScreensTodoAdd)
);
