import axios from 'axios';

import {
  getExternalsFetching,
  getExternalsSuccess,
  getExternalsFail,
} from '../actions';

import { API_URL } from '../../../constants';

export const getExternals = (externalId) => dispatch => {
    dispatch(getExternalsFetching());
    console.log(externalId);
    return axios.get(`${API_URL}/externals?id=${externalId}`)
        .then((response) => {
        // handle success
            if (response.data.error) {
                throw new Error(response.data.error);
            }
            dispatch(getExternalsSuccess(response.data.data));
        })
        .catch((error) => {
            // handle error
            console.log(error);
            dispatch(getExternalsFail(error));
        });
};
