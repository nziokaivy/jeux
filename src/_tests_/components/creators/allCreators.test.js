import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { AllCreators, mapStateToProps } from '../../../components/AllCreators/AllCreators';
import rootReducer from '../../../redux/reducers/index';
import mockData from '../../../_mocks_/fileMockData';

const middlewares = [thunk];
let store;

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState = {}) => {
  store = testStore(initialState);
  const wrapper = shallow(
    <AllCreators {...mockData.props} store={store} />,
  );
  return wrapper;
};

describe('All Creators Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.AllCreatorsMainState);
    // component.setProps({creators: mockData.AllCreatorsProps.creator})
  });

  it('Should return the initial State', () => {
    const initialState = {
      allCreators: {
        creators: null,
        creatorsError: null,
      },
    };
    expect(mapStateToProps(initialState).creators).toEqual(null);
  });
});
