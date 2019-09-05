export const getTodo = (state, id) => {
  return state.todos.find(item => item.id === parseInt(id, 10));
};
