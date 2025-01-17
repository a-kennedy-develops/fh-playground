import Image from 'next/image'
import type { Story } from '../data/stories'

type StoryCardProps = {
  story: Story
  className?: string
}

export function StoryCard({ story, className = '' }: StoryCardProps) {
  return (
    <div className={`rounded overflow-hidden shadow-md ${className}`}>
      <div className="relative h-40">
        <Image
          src={story.image}
          alt={story.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{story.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {story.content}
        </p>
      </div>
    </div>
  )
} 