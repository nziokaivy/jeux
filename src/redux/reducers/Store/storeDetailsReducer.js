import { FETCH_STORE_DETAILS_SUCCESS, FETCH_STORE_DETAILS_ERROR } from '../../actionTypes/actionTypes';

const initialState = {
  storeDetails: null,
  storeDetailsError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_STORE_DETAILS_SUCCESS:
      return {
        ...state,
        storeDetails: action.payload,
      }
    case FETCH_STORE_DETAILS_ERROR:
      return {
        ...state,
        storeDetailsError: action.payload,
      }
    default:
      return state
  }
}
