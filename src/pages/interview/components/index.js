import React, { Fragment } from 'react';
import { Layout } from 'antd';
import { PageHeader } from './page-header';
import { QuestionsContent } from '../containers/questions-content';
import { Sidebar } from '../../../modules/sidebar';
import styles from './styles.module.css';

export const InterviewComponent = ({ applicantinfo }) => {
    return (
        <Fragment>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <Layout className={styles.content}>
                <PageHeader applicantInfo={applicantinfo} />
                <QuestionsContent />
            </Layout>
        </Fragment>
    );
};
