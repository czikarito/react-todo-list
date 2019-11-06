import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoList from '.';
import configureStore from 'redux-mock-store';

describe('TodoList', () => {
  const completeTodo = jest.fn();
  let store;

  beforeEach(() => {
    const mockStore = configureStore();
    store = mockStore({
      todos: [
        {
          id: 1,
          title: 'First todo',
          author: 'Pawel',
          completed: false
        },
        {
          id: 2,
          title: 'Second todo',
          author: 'Pawel',
          completed: false
        }
      ],
      completeTodo
    });
  });

  it('should render two todos', () => {
    const enzymeWrapper = mount(<TodoList store={store} />);

    expect(enzymeWrapper.find('.todo').length).toEqual(2);
  });

  it('should render only not completed todos', () => {
    const mockStore = configureStore();
    store = mockStore({
      todos: [
        {
          id: 1,
          title: 'First todo',
          author: 'Pawel',
          completed: true
        },
        {
          id: 2,
          title: 'Second todo',
          author: 'Pawel',
          completed: false
        }
      ],
      completeTodo
    });

    const enzymeWrapper = mount(<TodoList store={store} />);

    expect(enzymeWrapper.find('.todo').length).toEqual(1);
  });
});
