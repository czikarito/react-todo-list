import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import WithBorder from '.';

it('renders snapshot correctly', () => {
  const HeaderWithBorder = WithBorder(Header);
  const wrapper = shallow(<HeaderWithBorder />);

  expect(wrapper).toMatchSnapshot();
});
