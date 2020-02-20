import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { QuestionnaireField } from '../../components/questionnaire-field';
import { selectQuestionsByType } from '../../../../domains/questions/selectors';
import { selectQuestion } from '../../../../domains/questions/actions';
import styles from './styles.module.css';

const { Content } = Layout;

class ContentComponent extends Component {
    render() {
        const { questions } = this.props;

        return (
            <Content className={styles['content-inner']}>
                <div ref={this.rootRef}>
                    {
                        questions.map((question) => (
                            <section key={question.id} className={styles.section} ref={this.singleRefs[question.id]}>
                                <h2>{question.name}</h2>
                                {
                                    question.questions.map(({ id, title, checkedAnswer }, index) => {
                                        return (
                                            <QuestionnaireField
                                                key={id}
                                                index={index + 1}
                                                id={id}
                                                title={title}
                                                checkedAnswer={checkedAnswer}
                                                onChange={this.props.onSelectQuestion}
                                            />
                                        );
                                    })
                                }
                            </section>
                        ))
                    }
                </div>
            </Content>
        );
    }
};

const mapDispathToProps = (state) => {
    return {
        ...state,
        questions: selectQuestionsByType(state),
    };
};

const mapStateToProps = {
    onSelectQuestion: selectQuestion,
};

export const QuestionsContent = connect(
  mapDispathToProps,
  mapStateToProps
)(ContentComponent);
