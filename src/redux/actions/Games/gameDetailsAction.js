import { FETCH_GAME_DETAILS_SUCCESS, FETCH_GAME_DETAILS_ERROR } from "../../actionTypes/actionTypes";
import apiCall from '../../../helpers/apiCall';
import dotenv from 'dotenv';

dotenv.config();
  
export const fetchGameDetails = id => async dispatch => {
  
  const API_URL = `/games/${id}`;
  const REQUEST_HEADERS = {
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.API_KEY,
    "Content-Type": "application/json"
  };
  try {
    const gameDetails = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
    dispatch({
      type: FETCH_GAME_DETAILS_SUCCESS,
      payload: gameDetails.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_GAME_DETAILS_ERROR,
      payload: error.response.data
    });
  }
};
