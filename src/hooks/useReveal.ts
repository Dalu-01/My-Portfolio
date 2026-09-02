import { useEffect } from 'react'

/**
 * Observes all elements with the `.reveal` class and adds `.visible`
 * once they scroll into view. Elements inside the hero are revealed
 * immediately on mount instead of waiting for a scroll trigger.
 */
export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealEls.forEach((el) => observer.observe(el))

    const heroTimeout = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('[data-hero] .reveal')
        .forEach((el) => el.classList.add('visible'))
    }, 100)

    return () => {
      observer.disconnect()
      clearTimeout(heroTimeout)
    }
  }, [])
}
