'use client'

import { useEffect } from 'react'

export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        // Force a faster scroll by using native scroll after a brief delay
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'auto'
          })
        }, 100)
      }
    }
  }, [])

  return null
} 