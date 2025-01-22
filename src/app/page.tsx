import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-center font-extrabold tracking-tight">
          <span className="block text-4xl sm:text-6xl">
            First Horizon
          </span>
          <span className="block text-2xl sm:text-4xl mt-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Development Playground
          </span>
        </h1>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-6xl">
          {/* Next.js Base Section */}
          <Link
            href="/base"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/0 p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-blue-400">Next.js Base</h3>
              <p className="text-gray-300">
                Master Next.js fundamentals and advanced concepts through interactive examples and hands-on learning.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          {/* Animations Section */}
          <Link
            href="/animations"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/0 p-8 transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-indigo-400">Animations</h3>
              <p className="text-gray-300">
                Discover the power of modern web animations with Framer Motion through interactive examples.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          {/* Foundation Section */}
          <Link
            href="/foundation"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/0 p-8 transition-all hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-cyan-400">Foundation</h3>
              <p className="text-gray-300">
                Explore First Horizon Foundation&apos;s community impact and grant opportunities.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          {/* Regions Section */}
          <Link
            href="/regions"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/0 p-8 transition-all hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-green-400">Regions</h3>
              <p className="text-gray-300">
                Experience modern banking solutions and financial tools in action.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </main>
  );
}
