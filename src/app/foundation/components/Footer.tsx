import Link from 'next/link';

export function Footer() {
  return (
    <nav className="bg-[#1B365D] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 text-center text-sm uppercase tracking-wider">
          <Link href="#" className="hover:text-[#00B2E3] transition">HOME</Link>
          <Link href="#" className="hover:text-[#00B2E3] transition">CORPORATE SOCIAL RESPONSIBILITY</Link>
          <Link href="#" className="hover:text-[#00B2E3] transition">NONPROFIT PARTNERS</Link>
          <Link href="#" className="hover:text-[#00B2E3] transition">SECURITY</Link>
        </div>
      </div>
    </nav>
  );
} 