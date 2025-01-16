import Link from "next/link";

export default function BasicTransitionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/animations"
          className="text-white/60 hover:text-white transition-colors"
        >
          ← Back to Animations
        </Link>
        <h1 className="text-2xl font-bold text-white">Basic Transitions</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Scale Transform */}
        <div className="flex flex-col gap-2 items-center">
          <button className="w-32 h-32 bg-purple-500 rounded-lg transform transition-transform duration-300 hover:scale-110 active:scale-95">
            Scale
          </button>
          <p className="text-sm text-white/60">Hover & Click</p>
        </div>

        {/* Rotate Transform */}
        <div className="flex flex-col gap-2 items-center">
          <button className="w-32 h-32 bg-blue-500 rounded-lg transform transition-transform duration-300 hover:rotate-12 active:-rotate-12">
            Rotate
          </button>
          <p className="text-sm text-white/60">Hover & Click</p>
        </div>

        {/* Color Transition */}
        <div className="flex flex-col gap-2 items-center">
          <button className="w-32 h-32 bg-pink-500 rounded-lg transition-colors duration-300 hover:bg-pink-600 active:bg-pink-700">
            Colors
          </button>
          <p className="text-sm text-white/60">Hover & Click</p>
        </div>

        {/* Multiple Properties */}
        <div className="flex flex-col gap-2 items-center">
          <button className="w-32 h-32 bg-green-500 rounded-lg transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-green-500/50">
            Combined
          </button>
          <p className="text-sm text-white/60">Hover</p>
        </div>

        {/* Translate */}
        <div className="flex flex-col gap-2 items-center">
          <button className="w-32 h-32 bg-yellow-500 rounded-lg transition-transform duration-300 hover:translate-y-4 active:-translate-y-4">
            Translate
          </button>
          <p className="text-sm text-white/60">Hover & Click</p>
        </div>

        {/* Opacity */}
        <div className="flex flex-col gap-2 items-center">
          <button className="w-32 h-32 bg-red-500 rounded-lg transition-opacity duration-300 hover:opacity-50 active:opacity-90">
            Opacity
          </button>
          <p className="text-sm text-white/60">Hover & Click</p>
        </div>
      </div>
    </div>
  );
} 