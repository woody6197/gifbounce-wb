import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export type Params = Record<
  "params",
  {
    gifID: string;
  }
>;

export async function POST(_: Request, { params }: Params) {
  const cookieStore = cookies();
  const user_id = cookieStore.get("userID")!.value;
  const data = await prisma.likes.create({
    data: { user_id, gif_id: params.gifID },
  });
  return Response.json({ data });
}

export async function GET(_: Request, { params }: Params) {
  const data = await prisma.likes.findMany({ where: { gif_id: params.gifID } });
  return Response.json({ data });
}
