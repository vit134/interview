import React from 'react';
import { connect } from 'react-redux';
import { selectApplicantItems, selectSelectedApplicantData, selectApplicant } from '../../../domains/applicants';
import { getExternals, selectExternalsData, selectExternalsIsLoading } from '../../../domains/externals';
import { ApplicantsComponent } from '../components/';

const mapDispathToProps = (state) => {
    return {
        applicants: selectApplicantItems(state),
        selectedApplicant: selectSelectedApplicantData(state),
        externals: selectExternalsData(state),
        isExternalLoading: selectExternalsIsLoading(state),
    };
};

const mapStateToProps = {
    onSelectApplicant: selectApplicant,
    onGetExternals: getExternals,
};

export const ApplicantsContainer = connect(
  mapDispathToProps,
  mapStateToProps
)(ApplicantsComponent);
