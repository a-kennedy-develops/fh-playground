'use client';

import Image from 'next/image';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  objectPosition?: string;
}

export function Hero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  children,
  objectPosition = 'center'
}: HeroProps) {
  return (
    <section className="relative h-[500px] w-full">
      <div className="relative inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={`object-cover object-${objectPosition}`}
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto h-full flex items-center px-4">
          <div className="bg-white/95 p-4 md:p-6 rounded-lg max-w-sm">
            <h1 className="text-gray-900 text-xl md:text-2xl font-semibold mb-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
} 