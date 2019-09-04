import React, { Component } from 'react'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item) =>
            !item.completed &&
              <TodoItem
                item={item}
                key={item.id}
              />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({todos}) => {
  return {
    todos
  }
}

export default connect(mapStateToProps)(TodoList);
