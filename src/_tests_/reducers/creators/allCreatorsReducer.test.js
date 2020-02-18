import allCreatorsReducer from '../../../redux/reducers/Creators/allCreatorsReducer';
import { FETCH_CREATORS_SUCCESS, FETCH_CREATORS_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get all Creator Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = allCreatorsReducer(undefined, {});
    expect(initialState).toEqual({
        creators: null,
        creatorsError: null,
    });
  });

  it('Should handle FETCH_CREATORS_SUCCESS ', () => {
    const successAction = {
      type: FETCH_CREATORS_SUCCESS,
      payload: {
        message: 'All creators have been retrieved successfully!',
      },
    };
    const returnedState = allCreatorsReducer(undefined, successAction);
    expect(returnedState).toEqual({
      creators: successAction.payload,
      creatorsError: null,
    });
  });

  it('Should handle FETCH_CREATORS_ERROR ', () => {
    const successAction = {
      type: FETCH_CREATORS_ERROR,
      payload: {
        message: 'Unable to retrieve all creators!',
      },
    };
    const returnedState = allCreatorsReducer(undefined, successAction);
    expect(returnedState).toEqual({
        creators: null,
        creatorsError: successAction.payload,
    });
  });
});
