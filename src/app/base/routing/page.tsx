import Link from 'next/link';
import { headers } from 'next/headers';

export default async function RoutingPage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') ?? 'Unknown';

  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">File-based Routing in Next.js</h1>
        <p className="text-lg text-gray-700">
          Next.js uses a file-system based router where folders define routes.
          This very page you&apos;re looking at is rendered from <code>/app/base/routing/page.tsx</code>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Concepts</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Folder Structure</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm">
              app/
              ├─ page.tsx      → /
              ├─ about/
              │  └─ page.tsx   → /about
              └─ blog/
                 ├─ page.tsx   → /blog
                 └─ [slug]/
                    └─ page.tsx → /blog/:slug
            </pre>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Special Files</h3>
            <ul className="space-y-2">
              <li><code>page.tsx</code> - Public route</li>
              <li><code>layout.tsx</code> - Shared layouts</li>
              <li><code>loading.tsx</code> - Loading UI</li>
              <li><code>error.tsx</code> - Error handling</li>
              <li><code>not-found.tsx</code> - 404 pages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dynamic Routes Example</h2>
        <div className="border rounded-lg p-4">
          <p className="mb-4">Click these example dynamic routes:</p>
          <div className="space-x-4">
            <Link 
              href="/base/routing/products/1" 
              className="text-blue-600 hover:underline"
            >
              Product 1
            </Link>
            <Link 
              href="/base/routing/products/2" 
              className="text-blue-600 hover:underline"
            >
              Product 2
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Server-side Information</h2>
        <div className="border rounded-lg p-4">
          <p>Your user agent (rendered on server):</p>
          <code className="block bg-gray-100 p-2 mt-2 rounded">
            {userAgent}
          </code>
        </div>
      </section>
    </div>
  );
} 