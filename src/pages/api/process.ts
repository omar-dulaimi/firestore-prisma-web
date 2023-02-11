// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firestorePrisma from "firestore-prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const result = await firestorePrisma(req.body);
    res.status(200).json({ result });
  } else {
    res.status(405).json({ message: "Unsupported method" });
  }
}
