import Link from "next/link";
import Image from "next/image";

export default function RegionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/regions" className="text-2xl font-bold text-green-600">
              Regions
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-green-600">Personal</Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">Small Business</Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">Commercial</Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">Wealth</Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">Insights</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="#" 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {children}

      <footer className="bg-gray-100 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Regions</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-green-600">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Investor Relations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Help & Support</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Terms of Use</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600">Accessibility</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© {new Date().getFullYear()} Regions Bank. Member FDIC. Equal Housing Lender.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 