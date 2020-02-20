import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { AllGames, mapStateToProps } from '../../../components/AllGames/AllGames';
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
    <AllGames {...mockData.props} store={store} />,
  );
  return wrapper;
};

describe('All Games Details Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.allGamesProps.games);
    component.setProps({games: mockData.allGamesProps.games});
  });

  // it('Should return initial data', () => {
  //   const stores = testStore(mockData.allGamesMainState);
  //   expect(shallow(
  //     <AllGames store={stores} />,
  //   )).toMatchSnapshot();
  // });


  it('Should return the initial State', () => {
    const initialState = {
        allGames: {
          games: null,
          gamesError: null
        }
    };
    expect(mapStateToProps(initialState).games).toEqual(null);
  });
});
