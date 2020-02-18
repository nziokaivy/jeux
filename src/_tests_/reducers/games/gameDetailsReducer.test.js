import gameDetailsReducer from '../../../redux/reducers/Games/gameDetailsReducer';
import { FETCH_GAME_DETAILS_SUCCESS, FETCH_GAME_DETAILS_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get Game Details Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = gameDetailsReducer(undefined, {});
    expect(initialState).toEqual({
        gameDetails: null,
        gamesDetailsError: null
    });
  });

  it('Should handle FETCH_GAME_DETAILS_SUCCESS ', () => {
    const successAction = {
      type: FETCH_GAME_DETAILS_SUCCESS,
      payload: {
        message: 'Game details have been retrieved successfully!',
      },
    };
    const returnedState = gameDetailsReducer(undefined, successAction);
    expect(returnedState).toEqual({
      gameDetails: successAction.payload,
      gamesDetailsError: null,

    });
  });

  it('Should handle FETCH_GAME_DETAILS_ERROR ', () => {
    const successAction = {
      type: FETCH_GAME_DETAILS_ERROR,
      payload: {
        message: 'Unable to retrieve game details!',
      },
    };
    const returnedState = gameDetailsReducer(undefined, successAction);
    expect(returnedState).toEqual({
        gameDetails: null,
        gamesDetailsError: successAction.payload,
    });
  });
});
