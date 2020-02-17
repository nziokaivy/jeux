import { FETCH_STORE_DETAILS_SUCCESS, FETCH_STORE_DETAILS_ERROR } from "../actionTypes/actionTypes";
  import axios from "axios";
  
  export const fetchStoreDetails = id => async dispatch => {
    const API_URL = `https://rawg-video-games-database.p.rapidapi.com/stores/${id}`;
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "827d7861c7msh48910b4bbc78122p1eb2d9jsne9872eb8e583",
      "Content-Type": "application/json"
    };
    try {
      const storeDetails = await axios.get(API_URL, { headers: REQUEST_HEADERS });
      dispatch({
        type: FETCH_STORE_DETAILS_SUCCESS,
        payload: storeDetails.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_STORE_DETAILS_ERROR,
        payload: error.response
      });
    }
  };