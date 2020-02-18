import { getOr, get, pipe, over } from 'lodash/fp';

const selectQuestionsData = getOr({}, ['questions', 'data']);
const selectSelectedQuestions = getOr({}, ['questions', 'selectedQuestions']);

export const selectQuestionsByType = pipe([
    over([
        selectQuestionsData,
        selectSelectedQuestions
    ]),
    ([data, selectedQuestions]) => {
        const { types, questions } = data;

        return types.reduce((acc, type) => {
            const questionsByType = questions.reduce((acc, question) => {
                if (question.typeId === type.id) {
                    acc.push({
                        ...question,
                        checkedAnswer: get([question.id, 'answer'], selectedQuestions),
                    });
                };

                return acc;
            }, []);

            const checkedLength = questionsByType.filter(el => el.checkedAnswer).length;

            acc.push({
                ...type,
                allChecked: checkedLength === questionsByType.length,
                questions: questionsByType,
            });

            return acc;
        }, []);
    }
]);
