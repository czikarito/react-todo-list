import { ADD_TODO } from "../actionTypes";

export const addTodo = value => {

  return {
    type: ADD_TODO,
    id: Math.random(),
    title: value,
    completed: false
  }
}
