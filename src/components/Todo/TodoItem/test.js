import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '.';

describe('Shallow rendered todo item', () => {
  const onCompleteTodo = jest.fn();
  const props = {
    item: {
      title: 'Title',
      id: '2',
      author: 'Pawel',
      completed: false
    },
    onCompleteTodo
  };

  it('should render item title and author', () => {
    const enzymeWrapper = shallow(<TodoItem {...props} />);

    expect(enzymeWrapper.find('.item-title').text()).toBe(props.item.title);
    expect(enzymeWrapper.find('.item-author').text()).toBe(props.item.author);
  });

  it('should call completeTodo on title  click', () => {
    const enzymeWrapper = shallow(<TodoItem {...props} />);

    const title = enzymeWrapper.find('.item-title');
    title.simulate('click');

    expect(onCompleteTodo).toHaveBeenCalled();
  });
});
