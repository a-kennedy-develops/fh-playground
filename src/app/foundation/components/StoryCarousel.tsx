'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Story } from '../data/stories'
import { StoryCard } from './StoryCard'

type StoryCarouselProps = {
  stories: readonly Story[]
}

export function StoryCarousel({ stories }: StoryCarouselProps) {
  const [activeStory, setActiveStory] = useState(0)
  const [direction, setDirection] = useState(0)
  const currentStory = stories[activeStory % stories.length]!

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const handlePrevious = () => {
    setDirection(-1)
    setActiveStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="md:hidden space-y-4">
      {/* Carousel Container */}
      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeStory}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <StoryCard story={currentStory} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls Container */}
      <div className="pt-2">
        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mb-4">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeStory ? 1 : -1)
                setActiveStory(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeStory ? 'bg-[#00B2E3]' : 'bg-gray-300'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center px-2">
          <button
            onClick={handlePrevious}
            className="text-[#00B2E3] p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous story"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-[#00B2E3] p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next story"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}