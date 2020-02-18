import { FETCH_STORE_DETAILS_SUCCESS, FETCH_STORE_DETAILS_ERROR } from "../../actionTypes/actionTypes";
  import apiCall from '../../../helpers/apiCall';
  
  export const fetchStoreDetails = id => async dispatch => {
    const API_URL = `/stores/${id}`;
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
      "Content-Type": "application/json"
    };
    try {
      const storeDetails = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
      dispatch({
        type: FETCH_STORE_DETAILS_SUCCESS,
        payload: storeDetails.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_STORE_DETAILS_ERROR,
        payload: error.response.data
      });
    }
  };
