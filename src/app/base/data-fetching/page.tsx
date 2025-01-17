import { Suspense } from 'react';
import Link from 'next/link';

// Example API Types
interface Post {
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Server Component with RSC fetch
async function PostList() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    next: { revalidate: 3600 } // Revalidate every hour
  }).then(res => res.json()) as Post[];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Posts (Server Component)</h3>
      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="border rounded-lg p-4">
            <h4 className="font-medium">{post.title}</h4>
            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Server Component with streaming
async function SlowUserList() {
  // Artificial delay to demonstrate streaming
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const users = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3').then(res => res.json()) as User[];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Users (Streaming)</h3>
      <div className="grid gap-4">
        {users.map(user => (
          <div key={user.id} className="border rounded-lg p-4">
            <h4 className="font-medium">{user.name}</h4>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Loading UI for Suspense
function LoadingUI() {
  return (
    <div className="space-y-4 animate-pulse">
      <h3 className="text-xl font-semibold">Loading...</h3>
      <div className="grid gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="border rounded-lg p-4">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DataFetchingPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Data Fetching in Next.js</h1>
        <p className="text-lg text-gray-700">
          Next.js provides multiple ways to fetch data in your application. This page demonstrates
          different data fetching patterns including Server Components, Streaming, and Static Data.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Examples</h2>
        
        <div className="grid gap-8">
          {/* Static Data */}
          <div className="border rounded-lg p-6">
            <PostList />
            <div className="mt-4 text-sm text-gray-500">
              ↑ This component uses <code>fetch</code> with revalidation every hour
            </div>
          </div>

          {/* Streaming Data */}
          <div className="border rounded-lg p-6">
            <Suspense fallback={<LoadingUI />}>
              <SlowUserList />
              <div className="mt-4 text-sm text-gray-500">
                ↑ This component streams data with artificial 2s delay
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Concepts</h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Server Components</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fetch data directly in Server Components without useEffect</li>
              <li>Automatic request deduplication</li>
              <li>TypeScript support for better type safety</li>
              <li>Built-in caching and revalidation</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Streaming & Suspense</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Progressive rendering with Suspense boundaries</li>
              <li>Show loading UI while data loads</li>
              <li>Improve perceived performance</li>
              <li>Automatic error handling</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Static Data</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fetch data at build time</li>
              <li>Revalidate data at specified intervals</li>
              <li>Combine static and dynamic data</li>
              <li>Optimize for performance</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 