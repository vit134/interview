import { createSelector } from 'reselect';
import { pipe, get, getOr } from 'lodash/fp';

export const selectApplicants = get(['applicants']);

export const selectApplicantsData = pipe([
    selectApplicants,
    get(['data'])
]);

export const selectApplicantItems = pipe([
    selectApplicantsData,
    getOr([], ['items'])
]);

export const selectApplicantItemsById = pipe([
    selectApplicantItems,
    (items) => items.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
]);

export const selectSelectedApplicantId = pipe([
    selectApplicants,
    get(['selectedApplicantId'])
]);

export const selectSelectedApplicantData =  createSelector([
    selectSelectedApplicantId,
    selectApplicantItemsById,
], (id, items) => {
    return getOr(null, [id], items);
});
