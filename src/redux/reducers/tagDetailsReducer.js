import { FETCH_TAGS_DETAILS_SUCCESS, FETCH_TAGS_DETAILS_ERROR } from '../actionTypes/actionTypes';

const initialState = {
  tagsDetails: null,
  tagsDetailsError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TAGS_DETAILS_SUCCESS:
      return {
        ...state,
        tagsDetails: action.payload,
      }
    case FETCH_TAGS_DETAILS_ERROR:
      return {
        ...state,
        tagsDetailsError: action.payload,
      }
    default:
      return state
  }
}