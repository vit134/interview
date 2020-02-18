import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { QuestionnaireField } from '../../components/questionnaire-field';
import { selectQuestionsByType } from '../../domains/questions/selectors';
import { selectQuestion } from '../../domains/questions/actions';
import styles from './styles.module.css';
const { Content } = Layout;

class ContentComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const callback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log(entry);
                  }
            });
        };

        this.observer = new IntersectionObserver(callback);

        Object.values(this.singleRefs).forEach(value =>
            this.observer.observe(value.current)
        );
    }

    render() {
        const { questions } = this.props;

        return (
            <Content className={styles['content-inner']}>
                <div ref={this.rootRef}>
                    {
                        questions.map((question, typeIndex) => (
                            <section key={question.id} className={styles.section} ref={this.singleRefs[question.id]}>
                                <h2>{question.name}</h2>
                                {
                                    question.questions.map(({ id, title, checkedAnswer }) => {
                                        return (
                                            <QuestionnaireField
                                                key={id}
                                                index={typeIndex + 1}
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

    rootRef = createRef();
    singleRefs = this.props.questions.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
      }, {});
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
