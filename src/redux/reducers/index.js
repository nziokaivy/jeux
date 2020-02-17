import { combineReducers } from 'redux';
import allGamesReducer from './allGamesReducer.js';
import gameDetailsReducer from './gameDetailsReducer.js';
import allCreatorsReducer from './allCreatorsReducer.js';
import creatorDetailsReducer from './creatorDetailsReducer';

export default combineReducers({
    allGames: allGamesReducer,
    gameDetails: gameDetailsReducer,
    allCreators: allCreatorsReducer,
    creatorDetails: creatorDetailsReducer,

});