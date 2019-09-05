import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '.';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const completeTodo = jest.fn();
const mockStore = configureStore([]);

const item = {
  title: 'Title',
  id: '1',
  author: 'Pawel',
  completed: false
};

describe('Shallow rendered todo item', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      completeTodo
    });

    component = shallow(
      <Provider store={store}>
        <TodoItem item={item} />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    const button = component.find('button');
    button.simulate('click');
    console.log(button);
    expect(component).toMatchSnapshot();
  });

  // it('should render todo title and author', () => {
  //   const wrapper = shallow(
  //     <TodoItem item={props.item} completeTodo={completeTodo} />
  //   );
  //   console.log('dupa', wrapper.text());
  //   expect(wrapper.find('.todo-item')).toBeTruthy();
  // });
});
