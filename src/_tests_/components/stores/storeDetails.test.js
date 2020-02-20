import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { StoreDetails, mapStateToProps } from '../../../components/stores/StoreDetails';
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
    <StoreDetails {...mockData.gameDetailsProps} store={store} />,
  );
  return wrapper;
};

describe('Store DetailsTest Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.storesDetailsMainState);
    //component.setProps({games: mockData.allGamesProps})
  });

  it('Should return the initial State', () => {
    const initialState = {
        storeDetails: {
            storeDetails: null,
            storeDetailsError: null
          }
    };
    expect(mapStateToProps(initialState).storeDetails).toEqual(null);
  });
});
