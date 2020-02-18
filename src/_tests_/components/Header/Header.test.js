import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/elements/Header/Header';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});