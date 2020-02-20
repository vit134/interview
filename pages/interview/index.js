import React, { Fragment } from 'react';
import { InterviewContainer } from '../../src/pages/interview';
import { getQuestions } from '../../src/domains/questions/operations';

const InterviewPage = () => {
    return <InterviewContainer />;
};

InterviewPage.getInitialProps = async ({ store }) => {
  try {
    await store.dispatch(getQuestions());
  } catch (e) {
    console.log(e);
  }

  return {  };
};


export default InterviewPage;
