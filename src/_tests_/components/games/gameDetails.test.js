import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import  { GameDetails, mapStateToProps } from '../../../components/GameDetails/GameDetails';
import rootReducer from '../../../redux/reducers/index';
import mockData from '../../../_mocks_/fileMockData';
import store from '../../../redux/store';

const middlewares = [thunk];

const setUp = (initialState = {}) => {
  //store = testStore(initialState);
  const wrapper = shallow(
    <GameDetails {...mockData.props} store={store} />,
  );
  return wrapper;
};

describe('All Creator Details Test Suite', () => {
  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.gameDetailsProps);
    component.setProps({gamesDetails: mockData.gameDetailsProps});
    
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
