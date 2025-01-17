import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  return (
    <div className="max-w-4xl">
      <div className="mb-4">
        <Link 
          href="/base/routing" 
          className="text-blue-600 hover:underline"
        >
          ← Back to routing examples
        </Link>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">
          Dynamic Route Example: Product {params.id}
        </h1>

        <div className="space-y-4">
          <p className="text-gray-700">
            This page demonstrates dynamic routing in Next.js. The URL parameter <code>id</code> is: 
            <span className="font-mono bg-gray-100 px-2 py-1 rounded ml-2">
              {params.id}
            </span>
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">How It Works</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The folder name <code>[id]</code> creates a dynamic route segment</li>
              <li>The parameter is passed to the page component via <code>params</code></li>
              <li>You can access multiple parameters using multiple brackets: <code>[category]/[id]</code></li>
              <li>Catch-all routes use <code>[...slug]</code> syntax</li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              File path: <code>/app/base/routing/products/[id]/page.tsx</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 