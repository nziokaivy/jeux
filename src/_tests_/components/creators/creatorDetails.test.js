import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { CreatorDetails, mapStateToProps } from '../../../components/CreatorDetails/CreatorDetails';
import rootReducer from '../../../redux/reducers/index';
import mockData from '../../../_mocks_/fileMockData';
import store from '../../../redux/store/index';

const middlewares = [thunk];
//let store;

// const testStore = (state) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//   return createStoreWithMiddleware(rootReducer, state);
// };

const setUp = (initialState = {}) => {
  //store = testStore(initialState);
  const wrapper = shallow(
    <CreatorDetails {...mockData.props} store={store} />,
  );
  return wrapper;
};

describe('All Creator Details Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.creatorDetailsProps.creatorDetails);
    //component.setProps({creatorDetails: mockData.creatorDetailsProps})
  });

  it('Should return the initial State', () => {
    const initialState = {
        creatorDetails: {
            creatorDetails: null,
            creatorDetailsError: null,
            },
    };
    expect(mapStateToProps(initialState).creatorDetails).toEqual(null);
  });
});
