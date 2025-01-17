import Link from "next/link";
import { BouncingBall } from "./components/BouncingBall";
import { ChainReaction } from "./components/ChainReaction";
import { MagneticEffect } from "./components/MagneticEffect";
import { WobbleCard } from "./components/WobbleCard";

export default function SpringPhysicsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/animations"
          className="text-white/60 hover:text-white transition-colors"
        >
          ← Back to Animations
        </Link>
        <h1 className="text-2xl font-bold text-white">Spring Physics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BouncingBall />
        <ChainReaction />
        <MagneticEffect />
        <WobbleCard />
      </div>
    </div>
  );
} 