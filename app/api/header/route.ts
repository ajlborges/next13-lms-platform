import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.headers);
  res.status(200).json({ headers: req.headers });
}
