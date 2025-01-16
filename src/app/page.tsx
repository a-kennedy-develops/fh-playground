import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-indigo-950 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-center sm:text-[5rem]">
            First Horizon Playground
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl border-2 border-red-600 bg-white/5 p-4 hover:bg-white/10 transition-all"
            href="/animations"
          >
            <h3 className="text-2xl font-bold text-red-600">Animations →</h3>
            <div className="text-lg">
              Explore various animation examples and transitions using Framer Motion.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl border-2 border-red-600 bg-white/5 p-4 hover:bg-white/10 transition-all"
            href="/foundation"
          >
            <h3 className="text-2xl font-bold text-red-600">Foundation →</h3>
            <div className="text-lg">
              View the First Horizon Foundation page showcasing community impact and grants.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
