import { FETCH_GAME_DETAILS_SUCCESS, FETCH_GAME_DETAILS_ERROR } from '../../actionTypes/actionTypes';

const initialState = {
  gameDetails: null,
  gamesDetailsError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GAME_DETAILS_SUCCESS:
      return {
        ...state,
        gameDetails: action.payload,
      }
    case FETCH_GAME_DETAILS_ERROR:
      return {
        ...state,
        gamesDetailsError: action.payload,
      }
    default:
      return state
  }
}
