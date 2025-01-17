import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimationWrapper } from '../components/ScrollAnimationWrapper';
import { ScrollToHash } from '../components/ScrollToHash'

export default function ApplyPage() {
  return (
    <>
      <ScrollToHash />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="relative inset-0 w-full h-full">
          <Image
            src="/images/teach-children.jpg"
            alt="Teaching children in a classroom"
            fill
            sizes="100vw"
            className="object-cover object-[center_40%]"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="max-w-2xl">
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Apply for a Grant
              </h1>
              <p className="text-white/90 text-lg md:text-xl">
                Supporting initiatives that strengthen and enrich our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <ScrollAnimationWrapper>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Grant Guidelines
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  First Horizon Foundation accepts grant applications from nonprofit organizations
                  that serve the communities in our footprint. Before applying, please review our
                  guidelines to ensure your organization and project align with our funding priorities.
                </p>
                <h3 className="text-xl font-semibold mb-4">Eligibility Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Must be a 501(c)(3) nonprofit organization</li>
                  <li>Organization must be located in our service area</li>
                  <li>Project must align with our focus areas</li>
                  <li>Strong track record of community impact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Process Section */}
      <ScrollAnimationWrapper delay={0.2}>
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Application Process
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00B2E3] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Review Guidelines</h3>
                    <p className="text-gray-600">
                      Carefully review our grant guidelines and eligibility requirements
                      to ensure your organization qualifies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00B2E3] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prepare Materials</h3>
                    <p className="text-gray-600">
                      Gather all required documentation, including your 501(c)(3) letter,
                      project budget, and organizational information.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00B2E3] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                    <p className="text-gray-600">
                      Complete the online application form with all required information
                      and documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Apply Now Section */}
      <ScrollAnimationWrapper delay={0.4}>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Apply?
              </h2>
              <p className="text-gray-600 mb-8">
                If you&apos;ve reviewed our guidelines and your organization meets the
                eligibility requirements, we invite you to submit a grant application.
              </p>
              <Link
                href="#apply-form"
                className="inline-block bg-[#00B2E3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0090B8] transition"
              >
                Start Application
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </>
  );
} 