import { FETCH_CREATORS_DETAILS_SUCCESS, FETCH_CREATORS_DETAILS_ERROR } from "../../actionTypes/actionTypes";
  import apiCall from "../../../helpers/apiCall";
  
  export const fetchCreatorDetails = id => async dispatch => {
    const API_URL = `/creators/${id}`;
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
      "Content-Type": "application/json"
    };
    try {
      const creatorDetails = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
      dispatch({
        type: FETCH_CREATORS_DETAILS_SUCCESS,
        payload: creatorDetails.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_CREATORS_DETAILS_ERROR,
        payload: error.response.data
      });
    }
  };
