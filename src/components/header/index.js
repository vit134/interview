import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import styles from './styles.module.css';

export const Header = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <div className={styles['header']}>
        <span className={styles.logo}>Interview</span>
        {/* <Menu
            className={styles.menu}
            mode="horizontal"
            defaultSelectedKeys={[pathname || '/']}
        >
            <Menu.Item key="/"><Link href="/">Главная</Link></Menu.Item>
            <Menu.Item key="/interview"><Link href="/interview">Интервью</Link></Menu.Item>
        </Menu> */}
        </div>
    );
};

