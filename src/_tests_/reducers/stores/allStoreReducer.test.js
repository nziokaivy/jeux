import allStoresReducer from '../../../redux/reducers/Store/allStoresReducer';
import { FETCH_ALLSTORES_SUCCESS, FETCH_ALLSTORES_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get all Stores Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = allStoresReducer(undefined, {});
    expect(initialState).toEqual({
        stores: null,
        storesError: null
    });
  });

  it('Should handle FETCH_ALLSTORES_SUCCESS ', () => {
    const successAction = {
      type: FETCH_ALLSTORES_SUCCESS,
      payload: {
        message: 'All stores have been retrieved successfully!',
      },
    };
    const returnedState = allStoresReducer(undefined, successAction);
    expect(returnedState).toEqual({
      stores: successAction.payload,
      storesError: null,
    });
  });

  it('Should handle FETCH_ALLSTORES_ERROR ', () => {
    const successAction = {
      type: FETCH_ALLSTORES_ERROR,
      payload: {
        message: 'Unable to retrieve all stores!',
      },
    };
    const returnedState = allStoresReducer(undefined, successAction);
    expect(returnedState).toEqual({
        stores: null,
        storesError: successAction.payload,
    });
  });
});
