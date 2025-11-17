"use server";
import { NextRequest, NextResponse } from "next/server";

interface Redirect {
  slug: string;
  link: string;
}

export async function GET(req: NextRequest) {
  const pageName = req.url.split("/").pop();
  const response = await fetch(process.env.REDIRECT_JSON_FILE as string);

  const data = (await response.json()) as Redirect[];
  const linkData = data.filter((l) => l.slug == pageName)[0];

  return NextResponse.redirect(new URL(linkData.link));
}
