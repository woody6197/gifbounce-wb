import prisma from "@/lib/prisma";

export type Params = Record<"params", { gifID: string }>;

export async function POST(_: Request, { params }: Params) {
  if (!process.env.USER_ID) {
    throw new Error("`USER_ID` env variable is missing.");
  }
  const data = await prisma.likes.create({
    data: { user_id: process.env.USER_ID, gif_id: params.gifID },
  });
  return Response.json({ data });
}

export async function GET(_: Request, { params }: Params) {
  const data = await prisma.likes.findMany({ where: { gif_id: params.gifID } });
  return Response.json({ data });
}
