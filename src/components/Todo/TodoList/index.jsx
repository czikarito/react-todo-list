import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoItem from '../TodoItem';

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map(
          item => !item.completed && <TodoItem item={item} key={item.id} />
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

export default withRouter(connect(mapStateToProps)(TodoList));
