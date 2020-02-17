import { FETCH_ALL_TAGS_SUCCESS, FETCH_ALL_TAGS_ERROR } from "../actionTypes/actionTypes";
import axios from "axios";
  
  export const fetchAllTags = () => async dispatch => {
    const API_URL = "https://rawg-video-games-database.p.rapidapi.com/tags";
  
    const REQUEST_HEADERS = {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "827d7861c7msh48910b4bbc78122p1eb2d9jsne9872eb8e583",
      "Content-Type": "application/json"
    };
    try {
      const allTags = await axios.get(API_URL, { headers: REQUEST_HEADERS });
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