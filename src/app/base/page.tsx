export default function BasePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Next.js Concepts & Examples</h1>
      
      <p className="text-lg mb-8">
        Welcome to a comprehensive guide on Next.js fundamentals and advanced concepts. 
        This section provides practical examples and detailed explanations of key Next.js features.
      </p>

      <div className="grid gap-6">
        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Why Next.js?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Built-in performance optimizations</li>
            <li>Server-side rendering and static generation</li>
            <li>Intuitive file-based routing</li>
            <li>API routes for backend functionality</li>
            <li>First-class TypeScript support</li>
            <li>Automatic code splitting</li>
          </ul>
        </section>

        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Fundamentals</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>File-based routing system</li>
                <li>Data fetching patterns</li>
                <li>Server and Client Components</li>
                <li>Page layouts and templates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Advanced Topics</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Streaming and Suspense</li>
                <li>Middleware implementation</li>
                <li>API route patterns</li>
                <li>Performance optimization techniques</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">How to Use This Guide</h2>
          <p className="text-gray-700">
            Each section in the sidebar contains practical examples and explanations. 
            The examples are designed to be interactive and showcase real-world usage patterns. 
            Start with the fundamentals and progress through to advanced concepts at your own pace.
          </p>
        </section>
      </div>
    </div>
  );
} 