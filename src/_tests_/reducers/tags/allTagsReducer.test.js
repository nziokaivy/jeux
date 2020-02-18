import allTagsReducer from '../../../redux/reducers/Tags/allTagsReducer';
import { FETCH_ALL_TAGS_SUCCESS, FETCH_ALL_TAGS_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get all Tags Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = allTagsReducer(undefined, {});
    expect(initialState).toEqual({
        tags: null,
        tagsError: null
    });
  });

  it('Should handle FETCH_ALL_TAGS_SUCCESS ', () => {
    const successAction = {
      type: FETCH_ALL_TAGS_SUCCESS,
      payload: {
        message: 'All tags have been retrieved successfully!',
      },
    };
    const returnedState = allTagsReducer(undefined, successAction);
    expect(returnedState).toEqual({
      tags: successAction.payload,
      tagsError: null,
    });
  });

  it('Should handle FETCH_ALL_TAGS_ERROR', () => {
    const successAction = {
      type: FETCH_ALL_TAGS_ERROR,
      payload: {
        message: 'Unable to retrieve all tags!',
      },
    };
    const returnedState = allTagsReducer(undefined, successAction);
    expect(returnedState).toEqual({
        tags: null,
        tagsError: successAction.payload,
    });
  });
});
