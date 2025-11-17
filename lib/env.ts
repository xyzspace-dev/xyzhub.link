"use server";

export async function PAGES_DIRECTORY(): Promise<string> {
  return String(process.env.PAGES_DIRECTORY);
}
