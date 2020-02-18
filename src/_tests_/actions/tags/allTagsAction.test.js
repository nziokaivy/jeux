import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchAllTags } from '../../../redux/actions/Tags/allTagsAction';
import { FETCH_ALL_TAGS_SUCCESS, FETCH_ALL_TAGS_ERROR } from '../../../redux/actionTypes/actionTypes';
import apiCall from '../../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();

describe('Get All Tags Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);    
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch FETCH_ALL_TAGS_SUCCESS', async () => {
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
        type: FETCH_ALL_TAGS_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(fetchAllTags())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch FETCH_ALL_TAGS_ERROR', async () => {
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
        type: FETCH_ALL_TAGS_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(fetchAllTags())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
