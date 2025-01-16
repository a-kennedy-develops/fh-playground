import Image from "next/image";
import Link from "next/link";

export default function FoundationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/volunteers.jpg"
          alt="Volunteers joining hands"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl bg-white/95 p-8 rounded-lg backdrop-blur-sm">
              <div className="mb-6">
                <Image
                  src="/first-horizon-foundation-logo.png"
                  alt="First Horizon Foundation"
                  width={200}
                  height={50}
                  className="mb-4"
                  priority
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                First Horizon Foundation
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                A strong commitment to our communities.
              </p>
              <Link
                href="#apply"
                className="inline-block bg-[#E31837] text-white px-6 py-3 rounded font-semibold hover:bg-[#c41530] transition-colors"
              >
                APPLY FOR A GRANT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What better way to celebrate 160 years of strength and stability than
            supporting the communities we&apos;re proud to serve?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We are so excited to unveil our 160 Grants for Good recipients. Recipients will hear from a local First Horizon associate regarding the grant award. Congratulations!
          </p>
          <Link
            href="#details"
            className="inline-block bg-[#E31837] text-white px-8 py-3 rounded font-semibold hover:bg-[#c41530] transition-colors"
          >
            GET THE DETAILS HERE
          </Link>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Our Commitment. Our Stories.</h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
          Our commitment to continuously caring for our communities – through all economic cycles – has always been
          part of our strategy and embedded in our core values. For 160 years, we&apos;ve collaborated with nonprofit partners
          and community leaders to build sustainability and strengthen the communities and people we serve.
        </p>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="flex flex-col">
            <div className="relative h-64 mb-4">
              <Image
                src="/images/nashville-team.jpg"
                alt="Nashville Team Service Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Nashville Team Completes Service Project</h3>
            <p className="text-gray-700">
              Nashville associates partnered with Can&apos;d Aid to build 60 bikes for underserved youth. The cost of those supplies was covered by funding from our First Horizon Foundation. An exceptional team building activity, this opportunity fostered collaboration among our bankers while giving back to children in need. They presented the bikes to first grade students at a local school and hosted sessions on health, safety, and financial literacy.
            </p>
          </div>

          {/* Story 2 */}
          <div className="flex flex-col">
            <div className="relative h-64 mb-4">
              <Image
                src="/images/teach-children.jpg"
                alt="Teach Children to Save Day"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Teach Children to Save Day</h3>
            <p className="text-gray-700">
              First Horizon participated in the American Bankers Association (ABA) Foundation&apos;s &ldquo;Teach Children to Save Day,&rdquo; directly providing financial literacy skills to more than 7,000 students. In April, over 300 First Horizon associates conducted financial literacy classes at First Horizon Foundation partner organizations, like Junior Achievement. Teams worked to impart essential money management skills and promote the value of saving from an early age.
            </p>
          </div>

          {/* Story 3 */}
          <div className="flex flex-col">
            <div className="relative h-64 mb-4">
              <Image
                src="/images/mobile-pantry.jpg"
                alt="Mobile Food Pantry"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile Food Pantry</h3>
            <p className="text-gray-700">
              Members of our Memphis-based Commercial Banking team presented the Neighborhood Christian Center, an organization dedicated to providing sustainability to those most vulnerable, with a First Horizon Foundation donation of $25,000. In partnership with the Mid-South Food Bank, the NCC and our associates worked to distribute food to more than 300 families in need through a mobile food pantry.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-4 right-4 space-x-6">
        <Link href="/about" className="text-white hover:text-[#E31837] font-medium">
          ABOUT US
        </Link>
        <Link href="/locations" className="text-white hover:text-[#E31837] font-medium">
          LOCATIONS
        </Link>
      </nav>

      {/* Footer */}
      <footer className="bg-[#002D72] text-white">
        <div className="container mx-auto py-4">
          <nav className="flex justify-center items-center space-x-12">
            <Link href="/" className="text-xs uppercase tracking-wide hover:text-[#E31837] transition-colors">
              Home
            </Link>
            <Link href="/corporate-social-responsibility" className="text-xs uppercase tracking-wide hover:text-[#E31837] transition-colors">
              Corporate Social Responsibility
            </Link>
            <Link href="/nonprofit-partners" className="text-xs uppercase tracking-wide hover:text-[#E31837] transition-colors">
              Nonprofit Partners
            </Link>
            <Link href="/security" className="text-xs uppercase tracking-wide hover:text-[#E31837] transition-colors">
              Security
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
} 