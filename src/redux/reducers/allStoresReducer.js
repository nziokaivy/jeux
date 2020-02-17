import { FETCH_ALLSTORES_SUCCESS, FETCH_ALLSTORES_ERROR } from '../actionTypes/actionTypes';

const initialState = {
  stores: null,
  storesError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALLSTORES_SUCCESS:
      return {
        ...state,
        stores: action.payload,
      }
    case FETCH_ALLSTORES_ERROR:
      return {
        ...state,
        storesError: action.payload,
      }
    default:
      return state
  }
}