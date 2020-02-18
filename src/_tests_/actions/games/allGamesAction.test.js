import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchAllGames } from '../../../redux/actions/Games/allGamesActions';
import {  FETCH_ALLGAMES_SUCCESS, FETCH_ALLGAMES_ERROR } from '../../../redux/actionTypes/actionTypes';
import apiCall from '../../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();

describe('Get All Games Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);    
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch FETCH_ALLGAMES_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();      
      request.respondWith({
        status: 200,
        response: {
          message: 'Success',
        },
      });
    });
    const expectedActions = [
      {
        payload: {
          message: 'Success',
        },
        type: FETCH_ALLGAMES_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(fetchAllGames())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch FETCH_ALLGAMES_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Error',
        },
      });
    });
    const expectedActions = [
      {
        payload: {
          message: 'Error',
        },
        type: FETCH_ALLGAMES_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(fetchAllGames())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
