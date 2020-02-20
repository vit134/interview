import axios from 'axios';

import {
  getApplicantsFetching,
  getApplicantsSuccess,
  getApplicantsFail,
} from '../actions';

import { API_URL } from '../../../constants';

export const getApplicants = () => dispatch => {
  dispatch(getApplicantsFetching());

  return axios.get(`${API_URL}/applicants`)
    .then((response) => {
      // handle success
      dispatch(getApplicantsSuccess(response.data.data));
    })
    .catch((error) => {
      // handle error
      dispatch(getApplicantsFail(error));
    });
};
