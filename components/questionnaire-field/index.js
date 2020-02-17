import React, { useState } from 'react';
import { Radio, Input } from 'antd';
import styles from './styles.module.css';

export const QuestionnaireField = ({ id, index, title, answers, note, selectedAnswer, onChange }) => {
    const [selected, select] = useState(selectedAnswer || answers[0].id)

    const handleChange = (e) => {
        const { value } = e.target;
        select(value);
        onChange(value);
    }

    return (
        <div className={styles.field}>
            <div className={styles.title}>{index}. {title}</div>
            <div className={styles['radio-group']}>
                <Radio.Group id={id} name={id} onChange={handleChange} value={selected}>
                    {
                        answers.map((answer) => (
                            <Radio key={answer.id} value={answer.id}>{answer.title}</Radio>
                        ))
                    }
                </Radio.Group>
            </div>
            <div className={styles.note}>
                <Input.TextArea value={note} />
            </div>
        </div>
    );
}

QuestionnaireField.defaultProps = {
    onChange: () => {}
}
