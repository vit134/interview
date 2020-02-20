import axios from 'axios';

import {
  getQuestionsFetching,
  getQuestionsSuccess,
  getQuestionsFail,
} from '../actions';

import { API_URL } from '../../../constants';

export const getQuestions = () => dispatch => {
  dispatch(getQuestionsFetching());

  return axios.get(`${API_URL}/questions`)
    .then((response) => {
      // handle success
      dispatch(getQuestionsSuccess(response.data.data));
    })
    .catch((error) => {
      // handle error
      dispatch(getQuestionsFail(error));
    });
};
