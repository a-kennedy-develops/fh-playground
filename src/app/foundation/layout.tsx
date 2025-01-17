import Image from 'next/image'
import Link from 'next/link'

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative">
        {/* Top Section - Grey */}
        <div className="bg-gray-100 py-2">
          <div className="px-6 flex justify-end gap-6">
            <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-800">
              ABOUT US
            </Link>
            <Link href="/locations" className="text-sm text-gray-600 hover:text-gray-800">
              LOCATIONS
            </Link>
          </div>
        </div>
        
        {/* Bottom Section - White with Logo */}
        <div className="bg-white py-4">
          <div className="px-6 flex justify-between items-center">
            <div className="flex-1">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">
                Social Responsibility
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/first-horizon-foundation-logo.png"
                alt="First Horizon Foundation"
                width={200}
                height={40}
                priority
              />
            </div>
            <div className="flex-1">
              {/* Empty div for spacing */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer Navigation */}
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
    </div>
  )
} 