import { FETCH_CREATORS_SUCCESS, FETCH_CREATORS_ERROR} from '../../actionTypes/actionTypes';
import apiCall from '../../../helpers/apiCall';

export const fetchCreators = () => async dispatch => {
  const API_URL = "/creators";

  const REQUEST_HEADERS = {
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.API_KEY,
    "Content-Type": "application/json"
  };
  try {
    const allCreators = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
    return dispatch({
      type: FETCH_CREATORS_SUCCESS,
      payload: allCreators.data
    });
  } catch (error) {
    return dispatch({
      type: FETCH_CREATORS_ERROR,
      payload: error.response.data
    });
  }

}
