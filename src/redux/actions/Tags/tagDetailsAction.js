import { FETCH_TAGS_DETAILS_SUCCESS, FETCH_TAGS_DETAILS_ERROR } from "../../actionTypes/actionTypes";
  import apiCall from '../../../helpers/apiCall';
  
  export const fetchTagDetails = id => async dispatch => {
    const API_URL = `/tags/${id}`;
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
      "Content-Type": "application/json"
    };
    try {
      const tagsDetails = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
      dispatch({
        type: FETCH_TAGS_DETAILS_SUCCESS,
        payload: tagsDetails.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_TAGS_DETAILS_ERROR,
        payload: error.response.data
      });
    }
  };
