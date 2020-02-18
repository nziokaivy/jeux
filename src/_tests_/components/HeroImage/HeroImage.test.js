import React from 'react';
import { shallow } from 'enzyme';
import HeroImage from '../../../components/elements/HeroImage/HeroImage';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<HeroImage />)).toMatchSnapshot();
  });
});