import React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function TodoContainer() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  )
}
