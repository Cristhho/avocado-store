import { NextApiRequest, NextApiResponse } from "next";

import DB from '@database';

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const db = new DB();
    const id = req.query.id;

    const entry = await db.getById(id as string);
    res.setHeader(
      'Content-type', 'application/json'
    );
    res.status(200).json(entry);
  } catch(error) {
    console.error(error);
    res.status(404).end();
  }
}

export default allAvos;
