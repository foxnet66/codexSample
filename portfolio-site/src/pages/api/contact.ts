import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false });
    return;
  }

  // 这里可以集成真实的邮件服务或 CRM
  res.status(200).json({ success: true });
}
