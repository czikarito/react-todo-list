import { ADD_TODO, COMPLETE_TODO } from "../actionTypes";

export const addTodo = value => {
  return {
    type: ADD_TODO,
    newTodo: {
      id: Math.random(),
      title: value,
      completed: false
    }
  }
}

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    id: id
  }
};
