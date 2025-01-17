import { ReactNode } from 'react';
import Link from 'next/link';

const sections = [
  {
    title: 'Fundamentals',
    links: [
      { href: '/base/routing', label: 'File-based Routing' },
      { href: '/base/data-fetching', label: 'Data Fetching' },
      { href: '/base/server-components', label: 'Server Components' },
      { href: '/base/client-components', label: 'Client Components' },
    ]
  },
  {
    title: 'Advanced',
    links: [
      { href: '/base/streaming', label: 'Streaming & Suspense' },
      { href: '/base/middleware', label: 'Middleware' },
      { href: '/base/api-routes', label: 'API Routes' },
      { href: '/base/optimizations', label: 'Performance Optimizations' },
    ]
  }
];

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Next.js Base</h1>
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
} 