import { FETCH_ALL_TAGS_SUCCESS, FETCH_ALL_TAGS_ERROR } from '../../actionTypes/actionTypes';

const initialState = {
  tags: null,
  tagsError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALL_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
      }
    case FETCH_ALL_TAGS_ERROR:
      return {
        ...state,
        tagsError: action.payload,
      }
    default:
      return state
  }
}
