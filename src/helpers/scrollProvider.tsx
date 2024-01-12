import React, { useRef, useEffect, ReactNode } from 'react'
import { ScrollContext } from './scrollContext'

type ScrollProviderProps = {
  children: ReactNode 
}

type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void

function easeInOutExpo(x: number): number {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
  }

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  
  const locomotiveScroll = useRef<any>(null)

  
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      locomotiveScroll.current = new LocomotiveScroll({
        lenisOptions: {
          duration: 0.7,
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 2,
        }
      })
    })()
  }, [])

  const scrollTo: ScrollToFunction = (e, currentLink) => {
    console.log(currentLink)
    e.preventDefault() 
    locomotiveScroll.current.scrollTo(currentLink, { 
      duration: 1.7,
      easing: (x: number) => easeInOutExpo(x),
    })
  }

  return (
    <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
  )
}
