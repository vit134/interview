import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <div className={styles['header-inner']}>
                <span className={styles.logo}>Interview</span>
                <Menu
                    className={styles.menu}
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </div>
        </Layout.Header>
    );
}
