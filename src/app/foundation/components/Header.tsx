'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="relative">
      <div className="bg-gray-100 py-2">
        <div className="px-6 flex justify-end gap-6">
          <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-800">
            ABOUT US
          </Link>
          <Link href="/locations" className="text-sm text-gray-600 hover:text-gray-800">
            LOCATIONS
          </Link>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="px-6 flex justify-between items-center">
          <div className="flex-1">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">
              Social Responsibility
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/foundation">
              <Image
                src="/images/first-horizon-foundation-logo.png"
                alt="First Horizon Foundation"
                width={200}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </header>
  );
} 