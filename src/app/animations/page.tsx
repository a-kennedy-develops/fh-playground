import Link from "next/link";

export default function AnimationsPage() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg bg-white/10 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Animation Examples
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/animations/basic-transitions"
            className="rounded-lg bg-white/5 p-4 transition-all hover:scale-105 hover:bg-white/10"
          >
            <h3 className="text-lg font-medium text-white">Basic Transitions</h3>
            <p className="mt-2 text-sm text-gray-300">
              Simple hover and click animations using Tailwind transitions
            </p>
          </Link>
          
          <Link
            href="/animations/keyframes"
            className="rounded-lg bg-white/5 p-4 transition-all hover:scale-105 hover:bg-white/10"
          >
            <h3 className="text-lg font-medium text-white">Keyframes</h3>
            <p className="mt-2 text-sm text-gray-300">
              Complex animations using CSS keyframes
            </p>
          </Link>

          <Link
            href="/animations/spring-physics"
            className="rounded-lg bg-white/5 p-4 transition-all hover:scale-105 hover:bg-white/10"
          >
            <h3 className="text-lg font-medium text-white">Spring Physics</h3>
            <p className="mt-2 text-sm text-gray-300">
              Natural-feeling animations with spring physics
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
} 