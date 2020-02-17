import React from 'react'
import Head from 'next/head'
import { Header } from '../components/header';
import { PageHeader } from '../components/page-header';
import { QuestionnaireField } from '../components/questionnaire-field';
import { Sidebar } from '../components/sidebar';
import { makeQuestionsAndAnswers } from './questions.mock';

import { Layout, Menu, Icon } from 'antd';

import styles from './styles.module.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const candidateInfo = {
    name: 'Кандидат Кандидатович'
}


const questions = makeQuestionsAndAnswers();

console.log(questions[0])
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
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
                <Content className={styles['content-inner']}>
                    <h2>Вопросы</h2>
                    {
                        questions.map((question, index) => <QuestionnaireField {...question} index={index + 1} />)
                    }
                </Content>
            </Layout>
        </Layout>
    </Layout>
  </div>
)

export default Home
