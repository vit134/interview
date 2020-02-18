import React from 'react';
import { connect } from 'react-redux';
import { Sidebar as SidebarComponent } from '../components/index';
import { getQuestions } from '../../../domains/questions/operations';
import { selectQuestionsByType } from '../../../domains/questions';

const mapDispathToProps = (state) => {
    return {
        ...state,
        questions: selectQuestionsByType(state),
    };
};

const mapStateToProps = {
  onGetQuestions: getQuestions,
};

export const Sidebar = connect(
  mapDispathToProps,
  mapStateToProps
)(SidebarComponent);
