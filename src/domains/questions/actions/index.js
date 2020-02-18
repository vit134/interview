export const GET_QUESTIONS_FETCHING = 'GET_QUESTIONS_FETCHING';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL';

export const SELECT_QUESTION = 'SELECT_QUESTION';

export const getQuestionsFetching = () => {
  return {
    type: GET_QUESTIONS_FETCHING,
  };
};

export const getQuestionsSuccess = (data) => {
  return {
    type: GET_QUESTIONS_SUCCESS,
    payload: data,
  };
};

export const getQuestionsFail = (error) => {
  return {
    type: GET_QUESTIONS_FAIL,
    payload: error,
  };
};

export const selectQuestion = ({ id, answer }) => {
    return {
        type: SELECT_QUESTION,
        payload: { id, answer },
    };
};
