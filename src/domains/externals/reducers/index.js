import {
    GET_EXTERNALS_FETCHING,
    GET_EXTERNALS_SUCCESS,
    GET_EXTERNALS_FAIL,
  } from '../actions';

  const initialState = {
    isLoading: false,
    data: {},
    error: null,
  };

  export const externalsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_EXTERNALS_FETCHING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_EXTERNALS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: {
                    ...state.data,
                    [payload.id]: payload,
                },
            };

        case GET_EXTERNALS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload,
        };

      default:
        return state;
    }
  };
