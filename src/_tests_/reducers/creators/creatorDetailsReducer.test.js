import creatorDetailsReducer from '../../../redux/reducers/Creators/creatorDetailsReducer';
import { FETCH_CREATORS_DETAILS_SUCCESS, FETCH_CREATORS_DETAILS_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get Creator Details Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = creatorDetailsReducer(undefined, {});
    expect(initialState).toEqual({
        creatorDetails: null,
        creatorDetailsError: null
    });
  });

  it('Should handle FETCH_CREATORS_DETAILS_SUCCESS ', () => {
    const successAction = {
      type: FETCH_CREATORS_DETAILS_SUCCESS,
      payload: {
        message: 'Creators details have been retrieved successfully!',
      },
    };
    const returnedState = creatorDetailsReducer(undefined, successAction);
    expect(returnedState).toEqual({
      creatorDetails: successAction.payload,
      creatorDetailsError: null,

    });
  });

  it('Should handle FETCH_CREATORS_DETAILS_ERROR ', () => {
    const successAction = {
      type: FETCH_CREATORS_DETAILS_ERROR,
      payload: {
        message: 'Unable to retrieve creators details!',
      },
    };
    const returnedState = creatorDetailsReducer(undefined, successAction);
    expect(returnedState).toEqual({
        creatorDetails: null,
        creatorDetailsError: successAction.payload,
    });
  });
});
