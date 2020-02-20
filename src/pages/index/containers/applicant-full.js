import React from 'react';
import { connect } from 'react-redux';
import { ApplicantFullCard } from '../components/applicant-full';
import { selectApplicantExternal, selectExternalsIsLoading } from '../../../domains/externals';
import { selectSelectedApplicantData } from '../../../domains/applicants';

const mapDispathToProps = (state) => {
    return {
        applicantInfo: selectSelectedApplicantData(state),
        isExternalLoading: selectExternalsIsLoading(state),
        external: selectApplicantExternal(state),
    };
};

const mapStateToProps = {};

export const ApplicantFullContainer = connect(
  mapDispathToProps,
  mapStateToProps
)(ApplicantFullCard);
