import React from 'react';
import { getApplicants } from '../../src/domains/applicants';
import { ApplicantsContainer } from '../../src/pages/index/';

const IndexPage = () => {
    return (
        <ApplicantsContainer />
      );
};

IndexPage.getInitialProps = async ({ store }) => {
  try {
    await store.dispatch(getApplicants());
  } catch (e) {
    console.log(e);
  }

  return {  };
};

export default IndexPage;
