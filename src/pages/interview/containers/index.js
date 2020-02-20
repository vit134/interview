import React from 'react';
import { connect } from 'react-redux';
import { selectSelectedApplicantData, selectApplicant } from '../../../domains/applicants';
import { InterviewComponent } from '../components/';

const mapDispathToProps = (state) => {
    return {
        applicantinfo: selectSelectedApplicantData(state),
    };
};

const mapStateToProps = {};

export const InterviewContainer = connect(
  mapDispathToProps,
  mapStateToProps
)(InterviewComponent);
