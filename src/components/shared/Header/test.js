import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

it('renders snapshot correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
