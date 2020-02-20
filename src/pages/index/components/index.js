import React from 'react';

import { Card, Avatar } from 'antd';
import { ApplicantFullContainer as ApplicantFullCard } from '../containers/applicant-full';
import { getFullName } from '../../../helpers';
import styles from './styles.module.css';

const ApplicantDescription = ({ position, external }) => {
    return (
        <div>
            <div>{position}</div>
            <div>ID резюме : {external[0].id}</div>
        </div>
    );
};

const ApplicantCard = ({ id, name, photo, position, external, onClick }) => (
    <Card className={styles.card} onClick={() => onClick(id)}>
        <Card.Meta
            avatar={<Avatar src={photo} />}
            title={name}
            description={<ApplicantDescription position={position} external={external}/>}
        />
    </Card>
);

export const ApplicantsComponent = ({
    applicants,
    selectedApplicant,
    externals,
    isExternalLoading,
    onSelectApplicant,
    onGetExternals,
}) => {
    const handleCardClick = ({ applicantId, externalId }) => {
        onSelectApplicant(applicantId);
        if (!externals || !externals[externalId]) {
            onGetExternals(externalId);
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.sidebar}>
                {
                    applicants.map(applicant => {
                        const { last_name, first_name, photo_url, company, created, position, external } = applicant;
                        const fullName = getFullName({ last_name, first_name });
                        return (
                            <ApplicantCard
                                key={applicant.id}
                                id={applicant.id}
                                name={fullName}
                                photo={photo_url}
                                external={external}
                                company={company}
                                created={created}
                                onClick={() => handleCardClick({ applicantId: applicant.id, externalId: applicant.external[0].id })}
                                position={position} />
                        );
                    })
                }
            </div>
            <div className={styles.content}>
                {/* <ApplicantFullCard applicantInfo={selectedApplicant} /> */}
                <ApplicantFullCard />
            </div>
        </div>
    );
};

