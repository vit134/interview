import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import classnames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classnames.bind(styles);

const { Sider } = Layout;
const { SubMenu } = Menu;

export const Sidebar = ({ questions }) => {
  return (
    <Sider
      width={240}
      className={styles.sidebar}
    >
      <Menu
        mode="inline"
        defaultOpenKeys={['sub_menu-1']}
        className={styles.menu}
      >
          {
              questions.map(questionType => {
                  return (
                    <SubMenu
                        key={`sub_menu-${questionType.id}`}
                        className={cx('submenu', { checked: questionType.allChecked })}
                        title={questionType.name}>
                            {
                                questionType.questions.map((question, ind) => {
                                    return (
                                        <Menu.Item key={ind + 1}>
                                            <a href={`#question_${question.id}`}></a>
                                            {question.title}
                                            {
                                                question.checkedAnswer && (
                                                    <Icon
                                                        className={styles.icon}
                                                        type="check-circle"
                                                        theme="twoTone"
                                                        twoToneColor="#52c41a" />
                                                )
                                            }
                                        </Menu.Item>
                                    );
                                })
                            }
                    </SubMenu>
                  );
              })
        }
      </Menu>
    </Sider>
  );
};
