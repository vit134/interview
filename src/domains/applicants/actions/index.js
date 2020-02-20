export const GET_APPLICANTS_FETCHING = 'GET_APPLICANTS_FETCHING';
export const GET_APPLICANTS_SUCCESS = 'GET_APPLICANTS_SUCCESS';
export const GET_APPLICANTS_FAIL = 'GET_APPLICANTS_FAIL';

export const SELECT_APPLICANT = 'SELECT_APPLICANT';

export const getApplicantsFetching = () => {
    return {
        type: GET_APPLICANTS_FETCHING,
    };
};

export const getApplicantsSuccess = (data) => {
    return {
        type: GET_APPLICANTS_SUCCESS,
        payload: data,
    };
};

export const getApplicantsFail = (error) => {
    return {
        type: GET_APPLICANTS_FAIL,
        payload: error,
    };
};

export const selectApplicant = (applicantId) => {
    return {
        type: SELECT_APPLICANT,
        payload: applicantId,
    };
};
