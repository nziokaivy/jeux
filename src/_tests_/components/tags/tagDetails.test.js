import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { TagDetails, mapStateToProps } from '../../../components/tags/TagDetails';
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
    <TagDetails {...mockData.gameDetailsProps} store={store} />,
  );
  return wrapper;
};

describe('All Creator Details Test Suite', () => {
//   it('Should Pass New props Successfully', () => {
//     const component = setUp(mockData.tagDetailsMainState);
//     //component.setProps({games: mockData.allGamesProps})
//   });

it('Should return initial data', () => {
    const stores = testStore(mockData.tagDetailsMainState);
    expect(shallow(
      <TagDetails  store={stores} />,
    )).toMatchSnapshot();
  });

  it('Should return the initial State', () => {
    const initialState = {
        tagDetails: {
            tagsDetails: null,
            tagsDetailsError: null
           }
    };
    expect(mapStateToProps(initialState).tagDetails).toEqual(null);
  });
});
