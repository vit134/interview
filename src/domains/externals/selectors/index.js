import { pipe, get, getOr, over } from 'lodash/fp';
import { selectSelectedApplicantId } from '../../applicants/selectors';

export const selectExternals = get(['externals']);

export const selectExternalsData = pipe([
    selectExternals,
    get(['data'])
]);

export const selectExternalsIsLoading = pipe([
    selectExternals,
    get(['isLoading'])
]);

export const selectApplicantExternal = pipe([
    over([
        selectSelectedApplicantId,
        selectExternalsData
    ]),
    ([id, externals]) => getOr(null, [id], externals)
]);
