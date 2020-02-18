import React from 'react';
import {
  PageHeader as AntPageHeader, Typography, Row, Icon,
} from 'antd';
import styles from './styles.module.css';

const { Paragraph } = Typography;

const IconLink = ({ iconType, text }) => (
  <a className={styles.link}>
    <Icon type={iconType} className={styles['link-icon']} />
    {text}
  </a>
);

export const PageHeader = ({ info }) => {
  const { name } = info;
  return (
    <AntPageHeader
      className={styles['page-header']}
      title={name}
    >
      <Paragraph>
        Ant Design interprets the color system into two levels: a system-level color system and a
        product-level color system.
      </Paragraph>
      <Paragraph>
        Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
        easier for designers to have a clear psychological expectation of color when adjusting colors,
        as well as facilitate communication in teams.
      </Paragraph>
      <Row className="contentLink" type="flex">
        <IconLink
          iconType="github"
          text="Github"
        />
        <IconLink
          iconType="file-pdf"
          text="Резюме"
        />
      </Row>
    </AntPageHeader>
  );
};
