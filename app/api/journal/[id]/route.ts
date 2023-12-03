import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json();
  const user = await getUserByClerkId();
  const entryToUpdate = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content: content,
    },
  });

  return NextResponse.json({ data: entryToUpdate });
};
