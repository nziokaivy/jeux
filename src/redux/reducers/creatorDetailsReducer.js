import { FETCH_CREATORS_DETAILS_SUCCESS, FETCH_CREATORS_DETAILS_ERROR } from '../actionTypes/actionTypes';

const initialState = {
  creatorDetails: null,
  creatorDetailsError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CREATORS_DETAILS_SUCCESS:
      return {
        ...state,
        creatorDetails: action.payload,
      }
    case FETCH_CREATORS_DETAILS_ERROR:
      return {
        ...state,
        creatorDetailsError: action.payload,
      }
    default:
      return state
  }
}