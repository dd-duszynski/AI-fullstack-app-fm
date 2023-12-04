'use client';

import { createNewEntry } from '@/utils/api';
import { useRouter } from 'next/navigation';

export default function NewEntryCard() {
  const router = useRouter();

  const handleOnClick = async () => {
    const data = await createNewEntry();
    console.log('data: ', data);
    router.push(`/journal/${data.id}`);
  };

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  );
}
