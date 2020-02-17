import { FETCH_CREATORS_SUCCESS, FETCH_CREATORS_ERROR} from '../actionTypes/actionTypes';
import axios from 'axios';

export const fetchCreators = () => async dispatch => {
  const API_URL = "https://rawg-video-games-database.p.rapidapi.com/creators";

  const REQUEST_HEADERS = {
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": "827d7861c7msh48910b4bbc78122p1eb2d9jsne9872eb8e583",
    "Content-Type": "application/json"
  };
  try {
    const allCreators = await axios.get(API_URL, { headers: REQUEST_HEADERS });
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