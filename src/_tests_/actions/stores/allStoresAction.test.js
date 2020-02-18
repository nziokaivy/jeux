import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchAllStores } from '../../../redux/actions/Stores/allStoresAction';
import { FETCH_ALLSTORES_SUCCESS, FETCH_ALLSTORES_ERROR } from '../../../redux/actionTypes/actionTypes';
import apiCall from '../../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();

describe('Get All Stores Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);    
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch FETCH_ALLSTORES_SUCCESS', async () => {
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
        type: FETCH_ALLSTORES_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(fetchAllStores())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch FETCH_ALLSTORES_ERROR', async () => {
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
        type: FETCH_ALLSTORES_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(fetchAllStores())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
