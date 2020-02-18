import { combineReducers } from 'redux';
import allGamesReducer from '../reducers/Games/allGamesReducer';
import gameDetailsReducer from '../reducers/Games/gameDetailsReducer';
import allCreatorsReducer from '../reducers/Creators/allCreatorsReducer';
import creatorDetailsReducer from '../reducers/Creators/creatorDetailsReducer';
import allTagsReducer from '../reducers/Tags/allTagsReducer';
import tagDetailsReducer from '../reducers/Tags/tagDetailsReducer';
import allStoresReducer from '../reducers/Store/allStoresReducer';
import storeDetailsReducer from '../reducers/Store/storeDetailsReducer';

export default combineReducers({
    allGames: allGamesReducer,
    gameDetails: gameDetailsReducer,
    allCreators: allCreatorsReducer,
    creatorDetails: creatorDetailsReducer,
    allTags: allTagsReducer,
    tagDetails: tagDetailsReducer,
    allStores: allStoresReducer,
    storeDetails:storeDetailsReducer,
});
