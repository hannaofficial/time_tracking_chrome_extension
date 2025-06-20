

import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hi i am hanna</h1>
      <Link 
      href="/historyAnalysis"
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to History Analysis

      </Link>
    </div>
  );
}
