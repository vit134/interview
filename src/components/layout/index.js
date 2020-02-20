import React, { Fragment } from 'react';
import Head from 'next/head';
import { Layout as AntdLayout } from 'antd';
import { Header } from '../header';

import styles from './styles.module.css';

export const Layout = ({ children: Content }) => {
    return (
        <Fragment>
            <Head>
                <title>Avito Interview</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AntdLayout className={styles.layout}>
                <AntdLayout.Header className={styles.header}>
                    <Header />
                </AntdLayout.Header>
                <AntdLayout className={styles.content}>
                    {Content}
                </AntdLayout>
            </AntdLayout>
        </Fragment>
    );
};
