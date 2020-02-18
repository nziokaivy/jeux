import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { AllTags, mapStateToProps } from '../../../components/AllTags/AllTags';
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
    <AllTags {...mockData.allGamesProps} store={store} />,
  );
  return wrapper;
};

describe('All Creator Details Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.allTagsProps.tags);
    component.setProps({tags: mockData.allTagsProps.tags})
  });

  it('Should return initial data', () => {
    const stores = testStore(mockData.allTagsMainState);
    expect(shallow(
      <AllTags store={stores} />,
    )).toMatchSnapshot();
  });


  it('Should return the initial State', () => {
    const initialState = {
        allTags: {
            tags: null,
            tagsError: null
           }
    };
    expect(mapStateToProps(initialState).tags).toEqual(null);
  });
});
