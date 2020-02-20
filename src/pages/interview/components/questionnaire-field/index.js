import React, { useState } from 'react';
import { Radio, Input } from 'antd';
import styles from './styles.module.css';

export const QuestionnaireField = ({
  id, index, title, note, checkedAnswer, onChange,
}) => {
    const [selected, selectAnswer] = useState(checkedAnswer);

    const handleChange = (e) => {
        const { value } = e.target;
        selectAnswer(value);
        onChange({ id, answer: value });
    };

    return (
        <div className={styles.field} id={`question_${id}`}>
            <div className={styles.title}>
                {index}
                .
                {' '}
                {title}
            </div>
            <div className={styles['radio-group']}>
                <Radio.Group id={id} name={id} onChange={handleChange} value={selected}>
                    <Radio value='good'>Хорошо</Radio>
                    <Radio value='normal'>Сойдет</Radio>
                    <Radio value='bad'>Плохо</Radio>
                </Radio.Group>
            </div>
            <div className={styles.note}>
                <Input.TextArea value={note} />
            </div>
        </div>
    );
};

QuestionnaireField.defaultProps = {
  onChange: () => {},
};
