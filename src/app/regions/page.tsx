import Image from "next/image";
import Link from "next/link";

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-16 text-white relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Move ahead confidently with a Regions LifeGreen Checking Account.
            </h1>
            <Link 
              href="#"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
            >
              Open an account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Build financial confidence. We can help.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">A Regions LifeGreen plan helps you reach your money milestones.</h3>
              <Link href="#" className="text-green-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Quickly find a Regions branch or ATM near you.</h3>
              <Link href="#" className="text-green-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Confidently plan your retirement. Get started today.</h3>
              <Link href="#" className="text-green-600 hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Your path to financial confidence starts here.</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-green-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Make a personal deposit
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors">
              Learn more about Regions LifeGreen® plans
            </button>
          </div>
        </div>
      </section>

      {/* Banking Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            We have smart solutions for your banking needs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <span className="text-green-600 text-2xl">{solution.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "💳",
    title: "Checking accounts",
    description: "Make everyday life easier with our great checking accounts"
  },
  {
    icon: "💰",
    title: "Start building now",
    description: "Open a savings account that fits your lifestyle and spending"
  },
  {
    icon: "🏦",
    title: "Loan options",
    description: "Low monthly payments with flexible loan options"
  },
  {
    icon: "📈",
    title: "Investments",
    description: "Buy your dream home with a mortgage that fits your life"
  },
  {
    icon: "🔒",
    title: "Online banking",
    description: "Manage your money securely online, anytime"
  }
];

const solutions = [
  {
    icon: "🔍",
    title: "Get OverDraft Grace®",
    description: "Avoid overdraft fees with our smart account protection"
  },
  {
    icon: "📱",
    title: "Learn e-banking basics",
    description: "Get started with online and mobile banking features"
  },
  {
    icon: "📊",
    title: "Build credit for the future",
    description: "Understand and improve your credit score"
  },
  {
    icon: "🛡️",
    title: "Control your cards",
    description: "Manage and protect your cards with our security features"
  }
]; 