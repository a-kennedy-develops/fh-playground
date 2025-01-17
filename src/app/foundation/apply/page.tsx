// import Image from 'next/image'
import Link from 'next/link'

const EXCLUDED_GRANTS = [
  'Individuals',
  'Trips and tours',
  'Solely religious, social or fraternal organizations',
  'Charities that redistribute funds to other charitable organizations, except in the case of recognized united fund type organizations',
  'K-12 schools',
  'Political organizations or those having the primary purpose of influencing legislation or promoting a particular ideological point of view',
  'Operating budget deficits'
] as const

const REGIONS = [
  { name: 'ALABAMA', href: '#' },
  { name: 'ARKANSAS', href: '#' },
  { name: 'FLORIDA', href: '#' },
  { name: 'GEORGIA', href: '#' },
  { name: 'LOUISIANA', href: '#' },
  { name: 'MISSISSIPPI', href: '#' },
  { name: 'NEW YORK', href: '#' },
  { name: 'NORTH CAROLINA', href: '#' },
  { name: 'SOUTH CAROLINA', href: '#' },
  { name: 'TENNESSEE', href: '#' },
  { name: 'TEXAS', href: '#' }
] as const

export default function ApplyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-[#1B365D]">
        <div className="absolute inset-0">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <h1 className="text-white text-4xl font-light">Apply for a Grant</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-12">
              Grant applications for the 2025 year will open on October 1, 2024. Please click on your region below to learn more about the grant process and how you can apply.
            </p>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4">Foundation grants are not provided to or for:</h2>
              <ul className="space-y-2">
                {EXCLUDED_GRANTS.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {REGIONS.map((region) => (
                <Link
                  key={region.name}
                  href={region.href}
                  className="text-[#00B2E3] hover:text-[#0090B8] transition font-medium"
                >
                  {region.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 