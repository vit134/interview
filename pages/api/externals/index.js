import questions from '../../../db.json';

const handler = (req, res) => {
    const { id } = req.query;
    if (!id) {
        return res.json({ error: 'externalId is required' });
    }

    const { externals } = questions;

    if (externals[id]) {
        return res.json({ data: questions.externals[id] });
    }

    return res.json({ error: 'no external' });
};

export default handler;
