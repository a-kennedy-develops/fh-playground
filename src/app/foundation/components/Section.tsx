interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export function Section({ 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  }

  return (
    <section className={`py-12 md:py-16 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
} 