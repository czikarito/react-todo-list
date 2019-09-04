import React from 'react'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((item) =>
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

const mapStateToProps = ({todos}) => {
  return {
    todos
  }
}

export default connect(mapStateToProps)(TodoList);
