import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoForm from '../../components/Todo/TodoForm';
import { getTodo } from '../../store/todo/selectors';
import { editTodo } from '../../store/todo/actions';

export class ScreensTodoEdit extends PureComponent {
  handleSave = data => {
    this.props.editTodo(data);
  };

  render() {
    return (
      <TodoForm initialValues={this.props.item} onSave={this.handleSave} />
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: getTodo(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => {
  return {
    editTodo: data => {
      dispatch(editTodo(data));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ScreensTodoEdit)
);
