import { combineReducers } from 'redux';
import allGamesReducer from './allGamesReducer.js';

export default combineReducers({
    allGames: allGamesReducer,
});