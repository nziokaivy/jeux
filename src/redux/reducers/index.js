import { combineReducers } from 'redux';
import allGamesReducer from './allGamesReducer.js';
import gameDetailsReducer from './gameDetailsReducer.js';
import allCreatorsReducer from './allCreatorsReducer.js';

export default combineReducers({
    allGames: allGamesReducer,
    gameDetails: gameDetailsReducer,
    allCreators: allCreatorsReducer,

});