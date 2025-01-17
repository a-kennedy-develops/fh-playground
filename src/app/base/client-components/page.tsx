'use client';

import { useState, useEffect } from 'react';

// Interactive form component
function InteractiveForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4">Interactive Form</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
}

// Component using browser APIs
function BrowserAPIsDemo() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4">Browser APIs</h3>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Window Size:</span>{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">
            {windowSize.width} x {windowSize.height}
          </code>
        </p>
        <p>
          <span className="font-medium">Mouse Position:</span>{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">
            x: {mousePosition.x}, y: {mousePosition.y}
          </code>
        </p>
      </div>
    </div>
  );
}

// Component with local state management
function Counter() {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleAction = (action: 'increment' | 'decrement') => {
    setCount(prev => action === 'increment' ? prev + 1 : prev - 1);
    setLastAction(action);
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4">State Management</h3>
      <div className="space-y-4">
        <div className="text-center">
          <span className="text-4xl font-bold">{count}</span>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleAction('decrement')}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Decrease
          </button>
          <button
            onClick={() => handleAction('increment')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Increase
          </button>
        </div>
        {lastAction && (
          <p className="text-center text-gray-600">
            Last action: {lastAction}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ClientComponentsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Client Components in Next.js</h1>
        <p className="text-lg text-gray-700">
          Client Components enable rich interactivity in your application by running on the client side.
          They have access to browser APIs, state, and effects.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interactive Examples</h2>
        <div className="grid gap-6">
          <InteractiveForm />
          <BrowserAPIsDemo />
          <Counter />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">When to Use Client Components</h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Interactivity</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Add event listeners</li>
              <li>Manage state and effects</li>
              <li>Use browser APIs</li>
              <li>Handle user input</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Keep Client Components at the leaves of your component tree</li>
              <li>Use the &apos;use client&apos; directive at the top of the file</li>
              <li>Split interactive and non-interactive parts</li>
              <li>Minimize client-side JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 