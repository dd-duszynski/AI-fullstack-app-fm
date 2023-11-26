import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white bg-black">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl">Title</h1>
        <p className="text-2xl text-white/60 mb-4">Desc</p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
