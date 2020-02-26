import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../../components/elements/NotFound';

describe('Not Found component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<NotFound />)).toMatchSnapshot();
  });
});
