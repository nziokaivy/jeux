import tagDetailsReducer from '../../../redux/reducers/Tags/tagDetailsReducer';
import { FETCH_TAGS_DETAILS_SUCCESS, FETCH_TAGS_DETAILS_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get Tag Details Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = tagDetailsReducer(undefined, {});
    expect(initialState).toEqual({
        tagsDetails: null,
        tagsDetailsError: null
    });
  });

  it('Should handle FETCH_TAGS_DETAILS_SUCCESS ', () => {
    const successAction = {
      type: FETCH_TAGS_DETAILS_SUCCESS,
      payload: {
        message: 'Tag details have been retrieved successfully!',
      },
    };
    const returnedState = tagDetailsReducer(undefined, successAction);
    expect(returnedState).toEqual({
      tagsDetails: successAction.payload,
      tagsDetailsError: null,
    });
  });

  it('Should handle FETCH_TAGS_DETAILS_ERROR', () => {
    const successAction = {
      type: FETCH_TAGS_DETAILS_ERROR,
      payload: {
        message: 'Unable to retrieve tag details!',
      },
    };
    const returnedState = tagDetailsReducer(undefined, successAction);
    expect(returnedState).toEqual({
        tagsDetails: null,
        tagsDetailsError: successAction.payload,
    });
  });
});
