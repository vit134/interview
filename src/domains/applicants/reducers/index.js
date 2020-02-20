import {
    GET_APPLICANTS_FETCHING,
    GET_APPLICANTS_SUCCESS,
    GET_APPLICANTS_FAIL,

    SELECT_APPLICANT,
  } from '../actions';

  const initialState = {
    isLoading: false,
    data: null,
    error: null,
    selectedApplicantId: null,
  };

  export const applicantsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_APPLICANTS_FETCHING:
            return {
            ...state,
            isLoading: true,
            };

        case GET_APPLICANTS_SUCCESS:
            return {
            ...state,
            isLoading: false,
            data: payload,
            };

        case GET_APPLICANTS_FAIL:
            return {
            ...state,
            isLoading: false,
            error: payload,
        };

        case SELECT_APPLICANT:
            return {
                ...state,
                selectedApplicantId: payload,
            };

      default:
        return state;
    }
  };
