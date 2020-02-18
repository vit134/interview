import {
  GET_QUESTIONS_FETCHING,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAIL,
  SELECT_QUESTION,
} from '../actions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  selectedQuestions: {},
};

export const questionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUESTIONS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case GET_QUESTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case SELECT_QUESTION:
        const { id, answer } = payload;
        return {
            ...state,
            selectedQuestions: {
                ...state.selectedQuestions,
                [id]: { id: id, answer: answer },
            },
        };

    default:
      return state;
  }
};
