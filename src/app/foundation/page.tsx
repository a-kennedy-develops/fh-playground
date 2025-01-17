import Image from 'next/image'
import Link from 'next/link'
import { stories } from './data/stories'
import { StoryCard } from './components/StoryCard'
import { StoryCarousel } from './components/StoryCarousel'

const IMPACT_AREAS = [
  { title: 'Arts & Culture', description: 'Emphasizing excellence and investment in the arts' },
  { title: 'Education & Leadership', description: 'Educating and developing our future leaders' },
  { title: 'Environmental Sustainability', description: 'Fostering a more sustainable future' },
  { title: 'Financial Literacy', description: 'Promoting financial literacy within our communities' },
  { title: 'Health & Human Services', description: 'Improving the well-being of our communities' }
] as const

export default function FoundationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[500px] w-full">
        <div className="relative inset-0 w-full h-full">
          <Image
            src="/images/volunteers.png"
            alt="First Horizon Foundation volunteers in blue shirts"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0">
          <div className="container mx-auto h-full flex items-center px-4 md:px-4">
            <div className="bg-white/95 p-4 md:p-6 rounded-lg max-w-[280px] md:max-w-sm">
              <h1 className="text-gray-900 text-xl md:text-2xl font-semibold mb-1">First Horizon Foundation</h1>
              <p className="text-gray-600 text-sm mb-4">A strong commitment to our communities.</p>
              <Link 
                href="/foundation/apply" 
                className="inline-block bg-[#00B2E3] text-white text-sm px-4 py-2 rounded hover:bg-[#0090B8] transition"
              >
                APPLY FOR A GRANT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Message */}
      <section className="py-8 md:py-12 text-center px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            What better way to celebrate 160 years of strength and stability than
            supporting the communities we&apos;re proud to serve?
          </h2>
          <p className="mb-4 text-gray-600 text-sm">
            We are so excited to unveil our 160 Grants for Good recipients. Recipients will hear from a local First Horizon associate regarding the grant award. Congratulations!
          </p>
          <Link 
            href="#details" 
            className="inline-block bg-[#00B2E3] text-white text-sm px-4 py-2 rounded hover:bg-[#0090B8] transition"
          >
            GET THE DETAILS HERE
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-[60%] relative">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/images/food-drive.jpg"
                alt="First Horizon Foundation community impact"
                fill
                className="object-cover object-[center_25%]"
                priority
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-[40%] md:pl-12">
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Meeting the financial needs of the people we serve is just part of our story.
            </h3>
            <p className="mb-4 text-gray-600 text-sm leading-relaxed">
              First Horizon Foundation is the private, charitable foundation of First Horizon Corporation. Founded in 1993 to serve the communities in which we do business, First Horizon Foundation has donated more than $100 million across our footprint. Our grants are invested in a way that engages our employees and communities to help drive progress and prosperity across these impact areas:
            </p>
            <ul className="space-y-2 text-sm">
              {IMPACT_AREAS.map(({ title, description }) => (
                <li key={title}>• <strong>{title}:</strong> {description}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Our Commitment. Our Stories.</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed">
            Our commitment to corporate social responsibility is more than just a statement. It&apos;s who we have been since our very beginning and embedded in our core values. For 160 years, we&apos;ve collaborated with nonprofit partners and community leaders to build sustainability and strengthen the communities and people we serve.
          </p>
          
          {/* Story Cards - Desktop */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            {stories.map((story, index) => (
              <StoryCard key={index} story={story} />
            ))}
          </div>

          {/* Story Cards - Mobile Carousel */}
          <StoryCarousel stories={stories} />
        </div>
      </section>
    </>
  )
}