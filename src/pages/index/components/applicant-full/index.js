import React, { Fragment } from 'react';
import Link from 'next/link';
import { Card, Skeleton, Avatar, Tag, Spin, Button } from 'antd';
import { getFullName } from '../../../../helpers';
import styles from './styles.module.css';


const ExternalInfo = ({ isExternalLoading, external }) => {
    if (isExternalLoading) {
        return (
            <div className={styles.spin}>
                <Spin />
            </div>
        );
    }

    const { skills, contact, age } = external.data;

    return (
        <Fragment>
            <ul>
                {
                    skills && skills.split(', ').length > 0 && (
                        <li>
                            Навыки:
                            {' '}
                            {
                                skills.split(', ').map((skill, ind) => (
                                    <Tag key={ind} className={styles.tag}>{skill}</Tag>
                                ))
                            }
                        </li>
                )}
                {age && <li>Полных лет: {age}</li>}
            </ul>
            <h4>Контакты</h4>
            <ul>
                {
                    contact && contact.length && (
                        contact.map(el => {
                            switch (el.type.id) {
                                case 'cell':
                                    return <li>{el.type.name}: {el.value.country} ({el.value.city}) {el.value.number}</li>;

                                case 'email':
                                    return <li>{el.type.name}: {el.value}</li>;
                            }
                        })
                    )
                }
            </ul>
        </Fragment>
    );
};


export const ApplicantFullCard = ({ applicantInfo, isExternalLoading, external }) => {
    if (!applicantInfo) {
        return (
            <Card className={styles.card}>
                <Skeleton
                    loading
                    avatar
                    title
                    paragraph
                />
            </Card>
        );
    }

    const { photo_url, position, company, phone, email, birthday, money } = applicantInfo;

    const fullName = getFullName(applicantInfo);
    return (
        <Card  className={styles.card}>
            <Card.Meta
                className={styles.body}
                title={fullName}
                avatar={<Avatar shape='square' size={120} src={photo_url} />}
                description={
                    <div>
                        <div>{position}</div>
                        {email && <div>E-mail : {email}</div>}
                        {phone && <div>Телефон : {phone}</div>}
                        {money && <div>Деньги : {money}</div>}
                    </div>
                }
            />
            <div className={styles.extra}>
                <Link href={`/interview`}>
                    <Button type="primary" size='small'>Собеседовать</Button>
                </Link>
            </div>
            <div>
                <section>
                    <h4>Общая информация</h4>
                    <ul>
                        {external && external[0] && <li>ID резюме : {external[0].id}</li> }
                        {company && <li>Компания : {company}</li>}
                        {birthday && <li>Дата рождения : {birthday}</li>}
                    </ul>
                    <ExternalInfo isExternalLoading={isExternalLoading} external={external}/>
                </section>
            </div>
        </Card>
    );
};
