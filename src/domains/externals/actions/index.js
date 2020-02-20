export const GET_EXTERNALS_FETCHING = 'GET_EXTERNALS_FETCHING';
export const GET_EXTERNALS_SUCCESS = 'GET_EXTERNALS_SUCCESS';
export const GET_EXTERNALS_FAIL = 'GET_EXTERNALS_FAIL';

export const getExternalsFetching = () => {
    return {
        type: GET_EXTERNALS_FETCHING,
    };
};

export const getExternalsSuccess = (data) => {
    return {
        type: GET_EXTERNALS_SUCCESS,
        payload: data,
    };
};

export const getExternalsFail = (error) => {
    return {
        type: GET_EXTERNALS_FAIL,
        payload: error,
    };
};
