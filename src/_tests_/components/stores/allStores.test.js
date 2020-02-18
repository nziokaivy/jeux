import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { AllStores, mapStateToProps } from '../../../components/AllStores/AllStores';
import rootReducer from '../../../redux/reducers/index';
import mockData from '../../../_mocks_/fileMockData';
import store from '../../../redux/store';

const middlewares = [thunk];
// let store;

// const testStore = (state) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//   return createStoreWithMiddleware(rootReducer, state);
// };

const setUp = (initialState = {}) => {
  //store = testStore(initialState);
  const wrapper = shallow(
    <AllStores {...mockData.props} store={store} />,
  );
  return wrapper;
};

describe('All Stores Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.allStoresProps.stores);
    component.setProps({stores: mockData.allStoresProps.stores});
  });

  it('Should return the initial State', () => {
    const initialState = {
        allStores: {
            stores: null,
            storesError: null
        }
    };
    expect(mapStateToProps(initialState).stores).toEqual(null);
  });
});
