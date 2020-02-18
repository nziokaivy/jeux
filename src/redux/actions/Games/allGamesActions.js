import { FETCH_ALLGAMES_SUCCESS, FETCH_ALLGAMES_ERROR } from "../../actionTypes/actionTypes";
import apiCall from '../../../helpers/apiCall';
import dotenv from 'dotenv';

dotenv.config();

export const fetchAllGames = () => async dispatch => {
  const API_URL = "/games";

  const REQUEST_HEADERS = {
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.API_KEY,
    "Content-Type": "application/json"
  };
  try {
    const allGames = await apiCall.get(API_URL, { headers: REQUEST_HEADERS });
    return dispatch({
      type: FETCH_ALLGAMES_SUCCESS,
      payload: allGames.data
    });
  } catch (error) {
    return dispatch({
      type: FETCH_ALLGAMES_ERROR,
      payload: error.response.data
    });
  }
  };
