import { ADD_TODO, COMPLETE_TODO } from "../actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Clean a room",
      completed: false
    },
    {
      id: 2,
      title: "Buy a milk",
      completed: false
    },
    {
      id: 3,
      title: "Go out with the dog",
      completed: false
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { newTodo } = action;

      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case COMPLETE_TODO:
      const editedTodos = state.todos.map(item =>
        item.id === action.id ? { ...item, completed: true } : item
      );

      return {
        ...state,
        todos: editedTodos
      }
  default:
    return state
  }
}
