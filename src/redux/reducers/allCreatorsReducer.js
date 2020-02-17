import {FETCH_CREATORS_SUCCESS ,FETCH_CREATORS_ERROR} from '../actionTypes/actionTypes';

const initialState = {
  creators: null,
  creatorsError: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CREATORS_SUCCESS:
      return {
        ...state,
        creators: action.payload,
      }
    case FETCH_CREATORS_ERROR:
      return {
        ...state,
        creatorsError: action.payload,
      }
    default:
      return state
  }
}