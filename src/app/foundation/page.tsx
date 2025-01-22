import Image from 'next/image'
import Link from 'next/link'
import { stories } from './data/stories'
import { StoryCard } from './components/StoryCard'
import { StoryCarousel } from './components/StoryCarousel'
import { ScrollAnimationWrapper } from './components/ScrollAnimationWrapper'

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
            <div className="bg-white/80 w-full p-4 md:p-[2.1875rem] md:max-w-[46.625rem] md:h-[14.6875rem] md:w-[46.625rem]">
              <h1 className="text-gray-900 text-xl md:text-5xl mb-1">First Horizon Foundation</h1>
              <p className="text-[#00043A] text-base mb-4">A strong commitment to our communities.</p>
              <Link 
                href="/foundation/apply" 
                className="inline-block bg-[#0050b5] text-white text-sm px-10 py-[17px] rounded hover:bg-[#003d8a] transition"
              >
                APPLY FOR A GRANT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Message */}
      <ScrollAnimationWrapper>
        <section className="py-8 md:py-12 text-center px-3.5 md:px-0">
          <div className="container mx-auto">
            <h2 className="text-[#00043A] text-xl md:text-4xl mb-3">
              What better way to celebrate 160 years of strength and stability than
              supporting the communities we&apos;re proud to serve?
            </h2>
            <p className="mb-4 text-[#00043A] text-sm">
              We are so excited to unveil our 160 Grants for Good recipients. Recipients will hear from a local First Horizon associate regarding the grant award. Congratulations!
            </p>
            <Link 
              href="#details" 
              className="inline-block bg-[#0050b5] text-white text-sm px-10 py-[17px] rounded hover:bg-[#003d8a] transition"
            >
              GET THE DETAILS HERE
            </Link>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Mission Section */}
      <ScrollAnimationWrapper>
        <section className="relative py-8 md:py-12">
          <div className="absolute left-0 w-screen md:w-[55vw] h-[300px] md:h-[400px]">
            <Image
              src="/images/food-drive.png"
              alt="First Horizon Foundation community impact"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto relative">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[60%]" aria-hidden="true">
                {/* Spacer div */}
              </div>
              <div className="w-full md:w-[40%] mt-[300px] md:mt-0">
                <div className="px-4 mt-4 md:mt-0">
                  <h3 className="text-[#00043A] text-lg md:text-xl font-bold mb-3">
                    Meeting the financial needs of the people we serve is just part of our story.
                  </h3>
                  <p className="mb-4 text-[#00043A] text-sm leading-relaxed">
                    First Horizon Foundation is the private, charitable foundation of First Horizon Corporation. Founded in 1993 to serve the communities in which we do business, First Horizon Foundation has donated more than $100 million across our footprint. Our grants are invested in a way that engages our employees and communities to help drive progress and prosperity across these impact areas:
                  </p>
                  <ul className="space-y-2 text-[#00043A] text-sm">
                    {IMPACT_AREAS.map(({ title, description }) => (
                      <li key={title}>• <strong>{title}:</strong> {description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Our Commitment Section */}
      <ScrollAnimationWrapper>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-[#00043A] text-xl md:text-2xl font-bold text-center mb-4">Our Commitment. Our Stories.</h2>
            <p className="text-center mb-8 max-w-2xl mx-auto text-[#00043A] text-sm leading-relaxed">
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
      </ScrollAnimationWrapper>
    </>
  )
}