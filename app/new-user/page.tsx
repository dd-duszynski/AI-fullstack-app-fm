import { prisma } from '@/utils/db';
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const createNewUser = async () => {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: { clerkId: user?.id },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    });
  }

  redirect('/journal');
};

export default async function NewUserPage() {
  await createNewUser();
  return <div>...loading</div>;
}
