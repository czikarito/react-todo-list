import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

it('renders snapshot correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

// it("renders 'home' link", () => {
//   const wrapper = shallow(<Header />);

//   // expect(header.find('.home')).toHaveText('te');
//   expect(wrapper.find('.home')).toHaveText('Text');
// });
