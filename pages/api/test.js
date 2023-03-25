import { createIssue } from './createIssue';

export default function handler(req, res) {
    const result = createIssue(22, 33,44,55);
    res.status(200).json({ result });
}

