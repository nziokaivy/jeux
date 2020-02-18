import allStoresReducer from '../../../redux/reducers/Store/storeDetailsReducer';
import { FETCH_STORE_DETAILS_SUCCESS, FETCH_STORE_DETAILS_ERROR } from '../../../redux/actionTypes/actionTypes';

describe('Get all Stores Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = allStoresReducer(undefined, {});
    expect(initialState).toEqual({
        storeDetails: null,
        storeDetailsError: null
    });
  });

  it('Should handle FETCH_STORE_DETAILS_SUCCESS ', () => {
    const successAction = {
      type: FETCH_STORE_DETAILS_SUCCESS,
      payload: {
        message: 'All store details have been retrieved successfully!',
      },
    };
    const returnedState = allStoresReducer(undefined, successAction);
    expect(returnedState).toEqual({
      storeDetails: successAction.payload,
      storeDetailsError: null,
    });
  });

  it('Should handle FETCH_STORE_DETAILS_ERROR ', () => {
    const successAction = {
      type: FETCH_STORE_DETAILS_ERROR,
      payload: {
        message: 'Unable to retrieve all stores details!',
      },
    };
    const returnedState = allStoresReducer(undefined, successAction);
    expect(returnedState).toEqual({
        storeDetails: null,
        storeDetailsError: successAction.payload,
    });
  });
});
