import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { GameDetails, mapStateToProps } from '../../../components/GameDetails/GameDetails';
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
    <GameDetails {...mockData.gameDetailsProps} store={store} />,
  );
  return wrapper;
};

describe('All Creator Details Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.gamesDetailsMainState);
    //component.setProps({games: mockData.allGamesProps})
  });

  it('Should return the initial State', () => {
    const initialState = {
        gameDetails: {
            gameDetails: null,
            gamesDetailsError: null
          }
    };
    expect(mapStateToProps(initialState).gameDetails).toEqual(null);
  });
});
