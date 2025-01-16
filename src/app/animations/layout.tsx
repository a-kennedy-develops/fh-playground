import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Animations - FH Playground",
  description: "Animation examples and experiments",
};

export default function AnimationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white">Animations</h1>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 