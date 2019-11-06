import { ADD_TODO, COMPLETE_TODO, EDIT_TODO } from './actionTypes';

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: { id }
  };
};

export const editTodo = payload => {
  return {
    type: EDIT_TODO,
    payload
  };
};
