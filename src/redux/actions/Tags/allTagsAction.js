import { FETCH_ALL_TAGS_SUCCESS, FETCH_ALL_TAGS_ERROR } from '../../actionTypes/actionTypes';
import apiCall from '../../../helpers/apiCall';
  
  export const fetchAllTags = () => async dispatch => {
    const API_URL = "/tags";
  
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
      "Content-Type": "application/json"
    };
    try {
      const allTags = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
      return dispatch({
        type: FETCH_ALL_TAGS_SUCCESS,
        payload: allTags.data
      });
    } catch (error) {
      return dispatch({
        type: FETCH_ALL_TAGS_ERROR,
        payload: error.response.data
      });
    }
  };
