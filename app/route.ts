import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.redirect(`${process.env.PAGE_HOST}/pages/hub`)
}

