import { FETCH_ALLGAMES_SUCCESS, FETCH_ALLGAMES_ERROR } from '../../actionTypes/actionTypes';

const initialState = {
  games: null,
  gamesError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALLGAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
      }
    case FETCH_ALLGAMES_ERROR:
      return {
        ...state,
        gamesError: action.payload,
      }
    default:
      return state
  }
}
