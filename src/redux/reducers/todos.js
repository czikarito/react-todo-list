import { ADD_TODO } from "../actionTypes";

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
      const { id, title, completed } = action;
      const newTodo = {
        id,
        title,
        completed
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }

  default:
    return state
  }
}

