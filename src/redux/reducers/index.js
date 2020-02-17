import { combineReducers } from 'redux';
import allGamesReducer from './allGamesReducer.js';
import gameDetailsReducer from './gameDetailsReducer.js';

export default combineReducers({
    allGames: allGamesReducer,
    gameDetails: gameDetailsReducer,

});