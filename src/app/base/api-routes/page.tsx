'use client';

import { useState } from 'react';

interface APIResponse {
  message: string;
  timestamp: string;
  userAgent?: string;
  data?: Record<string, unknown>;
}

function APITester() {
  const [getResponse, setGetResponse] = useState<string>('');
  const [postResponse, setPostResponse] = useState<string>('');
  const [loading, setLoading] = useState<'get' | 'post' | null>(null);

  const handleGet = async () => {
    try {
      setLoading('get');
      const response = await fetch('/api/hello');
      const data = await response.json() as APIResponse;
      setGetResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setGetResponse('Error fetching data');
    } finally {
      setLoading(null);
    }
  };

  const handlePost = async () => {
    try {
      setLoading('post');
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Hello from client!',
          timestamp: new Date().toISOString(),
        }),
      });
      const data = await response.json() as APIResponse;
      setPostResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setPostResponse('Error posting data');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">GET Request</h3>
        <button
          onClick={handleGet}
          disabled={loading === 'get'}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {loading === 'get' ? 'Loading...' : 'Send GET Request'}
        </button>
        {getResponse && (
          <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
            {getResponse}
          </pre>
        )}
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">POST Request</h3>
        <button
          onClick={handlePost}
          disabled={loading === 'post'}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors disabled:bg-green-300"
        >
          {loading === 'post' ? 'Loading...' : 'Send POST Request'}
        </button>
        {postResponse && (
          <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
            {postResponse}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function APIRoutesPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">API Routes in Next.js</h1>
        <p className="text-lg text-gray-700">
          Next.js provides a solution to build your API with file-based routing.
          This page demonstrates how to create and consume API routes.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Live API Example</h2>
        <APITester />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Implementation Details</h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Route Handler</h3>
            <p className="text-gray-700 mb-4">
              API routes are created in the <code>app/api</code> directory. Here&apos;s how our example is implemented:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
{`// app/api/hello/route.ts
export async function GET() {
  return NextResponse.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    message: 'Data received!',
    data: body,
  });
}`}
            </pre>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>File-based routing for API endpoints</li>
              <li>Built-in TypeScript support</li>
              <li>Request and response helpers</li>
              <li>Edge and Node.js runtimes</li>
              <li>Automatic body parsing</li>
              <li>Route handlers support streaming</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use appropriate HTTP methods</li>
              <li>Handle errors gracefully</li>
              <li>Validate input data</li>
              <li>Set proper response headers</li>
              <li>Implement rate limiting for production</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 