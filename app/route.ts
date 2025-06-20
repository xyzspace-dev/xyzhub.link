import { NextApiRequest } from "next";
export async function GET(req: NextApiRequest) {
  return Response.redirect(`${req.url}pages/hub`)
}

