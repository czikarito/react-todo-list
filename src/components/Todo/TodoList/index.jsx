import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import { completeTodo } from '../../../store/todo/actions';

class TodoList extends PureComponent {
  handleCompleteTodo = id => {
    this.props.completeTodo(id);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(
            item =>
              !item.completed && (
                <TodoItem
                  item={item}
                  key={item.id}
                  onCompleteTodo={this.handleCompleteTodo}
                />
              )
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => {
      dispatch(completeTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
