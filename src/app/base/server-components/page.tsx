import { headers } from 'next/headers';

// Server-only utility function
async function getServerTime() {
  return new Date().toLocaleString();
}

// Server Component that uses server-only APIs
async function ServerTimeDisplay() {
  const time = await getServerTime();
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') ?? 'Unknown';

  return (
    <div className="border rounded-lg p-4 bg-blue-50">
      <h3 className="text-xl font-semibold mb-4">Server-side Information</h3>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Server Time:</span>{' '}
          <code className="bg-blue-100 px-2 py-1 rounded">{time}</code>
        </p>
        <p>
          <span className="font-medium">User Agent:</span>{' '}
          <code className="bg-blue-100 px-2 py-1 rounded text-sm">{userAgent}</code>
        </p>
      </div>
    </div>
  );
}

// Another Server Component demonstrating environment access
function EnvironmentInfo() {
  return (
    <div className="border rounded-lg p-4 bg-green-50">
      <h3 className="text-xl font-semibold mb-4">Environment Access</h3>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Node Version:</span>{' '}
          <code className="bg-green-100 px-2 py-1 rounded">{process.version}</code>
        </p>
        <p>
          <span className="font-medium">Platform:</span>{' '}
          <code className="bg-green-100 px-2 py-1 rounded">{process.platform}</code>
        </p>
      </div>
    </div>
  );
}

// Server Component with async data processing
async function DataProcessor() {
  // Simulated heavy computation that should happen on server
  const data = Array.from({ length: 1000 }, (_, i) => i);
  const sum = data.reduce((a, b) => a + b, 0);
  const average = sum / data.length;

  return (
    <div className="border rounded-lg p-4 bg-purple-50">
      <h3 className="text-xl font-semibold mb-4">Server-side Computation</h3>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Processed Items:</span>{' '}
          <code className="bg-purple-100 px-2 py-1 rounded">{data.length}</code>
        </p>
        <p>
          <span className="font-medium">Average:</span>{' '}
          <code className="bg-purple-100 px-2 py-1 rounded">{average}</code>
        </p>
      </div>
    </div>
  );
}

export default async function ServerComponentsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Server Components in Next.js</h1>
        <p className="text-lg text-gray-700">
          Server Components allow you to render components on the server, reducing the JavaScript bundle
          sent to the client and enabling direct access to backend resources.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Live Examples</h2>
        <div className="grid gap-6">
          <ServerTimeDisplay />
          <EnvironmentInfo />
          <DataProcessor />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Benefits</h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Zero Bundle Size</h3>
            <p className="text-gray-700">
              Server Components are rendered on the server and send only the HTML to the client,
              resulting in zero JavaScript bundle size impact.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Direct Backend Access</h3>
            <p className="text-gray-700">
              Access databases, file systems, and other backend resources directly without additional
              API endpoints.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Automatic Code Splitting</h3>
            <p className="text-gray-700">
              Server Components are automatically code-split and can be streamed to the client as they
              become ready.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="border rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Use Server Components by default</li>
            <li>Switch to Client Components only when needed (e.g., for interactivity)</li>
            <li>Keep sensitive data and logic on the server</li>
            <li>Leverage streaming for improved UX</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 