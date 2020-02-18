import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import { Header } from '../src/components/header';
import { PageHeader } from '../src/components/page-header';
import { QuestionsContent } from '../src/containers/questions-content';
import { Sidebar } from '../src/modules/sidebar';
import { getQuestions } from '../src/domains/questions/operations';


import styles from './styles.module.css';

const candidateInfo = {
  name: 'Кандидат Кандидатович',
};

const Home = (props) => {
    console.log(props);
    return (
        <div>
          <Head>
            <title>Homae</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Layout>
            <Header />
            <Layout>
              <div className={styles.sidebar}>
                <Sidebar />
              </div>
              <Layout className={styles.content}>
                <PageHeader info={candidateInfo} />
                <QuestionsContent />
              </Layout>
            </Layout>
          </Layout>
        </div>
      );
};

Home.getInitialProps = async ({ store }) => {
  try {
    await store.dispatch(getQuestions());
  } catch (e) {
    console.log(e);
  }

  return {};
};


export default Home;
