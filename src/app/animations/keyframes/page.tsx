import Link from "next/link";
import { PulseEffect } from "./components/PulseEffect";
import { Spinner } from "./components/Spinner";
import { WaveText } from "./components/WaveText";
import { ColorShift } from "./components/ColorShift";

export default function KeyframesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/animations"
          className="text-white/60 hover:text-white transition-colors"
        >
          ← Back to Animations
        </Link>
        <h1 className="text-2xl font-bold text-white">Keyframe Animations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PulseEffect />
        <Spinner />
        <WaveText />
        <ColorShift />
      </div>
    </div>
  );
} 