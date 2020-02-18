import allGamesReducer from '../../../redux/reducers/Games/allGamesReducer';
import { FETCH_ALLGAMES_SUCCESS, FETCH_ALLGAMES_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get all Games Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = allGamesReducer(undefined, {});
    expect(initialState).toEqual({
        games: null,
        gamesError: null
    });
  });

  it('Should handle FETCH_ALLGAMES_SUCCESS ', () => {
    const successAction = {
      type: FETCH_ALLGAMES_SUCCESS,
      payload: {
        message: 'All games have been retrieved successfully!',
      },
    };
    const returnedState = allGamesReducer(undefined, successAction);
    expect(returnedState).toEqual({
      games: successAction.payload,
      gamesError: null,
    });
  });

  it('Should handle FETCH_ALLGAMES_ERROR ', () => {
    const successAction = {
      type: FETCH_ALLGAMES_ERROR,
      payload: {
        message: 'Unable to retrieve all games!',
      },
    };
    const returnedState = allGamesReducer(undefined, successAction);
    expect(returnedState).toEqual({
        games: null,
        gamesError: successAction.payload,
    });
  });
});
