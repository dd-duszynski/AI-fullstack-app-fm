'use client';

import { useState } from 'react';

export default function Editor({ entry }: any) {
  console.log('entry: ', entry);
  const [value, setValue] = useState(entry.content);

  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}