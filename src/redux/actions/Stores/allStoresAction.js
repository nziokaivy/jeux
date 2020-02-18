import { FETCH_ALLSTORES_SUCCESS, FETCH_ALLSTORES_ERROR } from "../../actionTypes/actionTypes";
  import apiCall from '../../../helpers/apiCall';
  
  export const fetchAllStores = () => async dispatch => {
    const API_URL = "/stores";
  
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
      "Content-Type": "application/json"
    };
    try {
      const allStores = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });     
      return dispatch({
        type: FETCH_ALLSTORES_SUCCESS,
        payload: allStores.data
      });
    } catch (error) {
      return dispatch({
        type: FETCH_ALLSTORES_ERROR,
        payload: error.response.data
      });
    }
  };
