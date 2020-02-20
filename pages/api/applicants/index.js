import questions from '../../../db.json';

const handler = (req, res) => {
    return res.json({ data: questions.applicants });
};

export default handler;
