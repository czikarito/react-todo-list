import reducer from '.';
import * as actions from './actions';

describe('todo reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should add todo', () => {
    expect(
      reducer(undefined, {
        type: 'ADD_TODO',
        payload: {
          title: '4',
          author: 'Pawel'
        }
      }).todos.length
    ).toEqual(4);
  });

  it('should complete todo', () => {
    expect(
      reducer(undefined, {
        type: 'COMPLETE_TODO',
        payload: {
          id: 1
        }
      }).todos[0].completed
    ).toBe(true);
  });

  it('should edit todo', () => {
    const editedTodo = {
      id: 1,
      title: 'New title',
      author: 'test',
      completed: false
    };

    expect(
      reducer(undefined, {
        type: 'EDIT_TODO',
        payload: editedTodo
      }).todos[0]
    ).toEqual(editedTodo);
  });
});
