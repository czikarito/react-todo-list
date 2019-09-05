import { ADD_TODO, COMPLETE_TODO, EDIT_TODO } from './actionTypes';

export const addTodo = data => {
  return {
    type: ADD_TODO,
    newTodo: {
      id: Math.random(),
      title: data.title,
      completed: false,
      author: data.author
    }
  };
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    id: id
  };
};

export const editTodo = item => {
  return {
    type: EDIT_TODO,
    payload: item
  };
};
