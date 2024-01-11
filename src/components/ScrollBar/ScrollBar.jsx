import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

import './ScrollBar.scss'

export const ScrollBar = () => {  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: true,
        }
      });

      tl.to('.circle', {
        bottom: '24%',
        ease: 'none',
      })
  }, [])

  return (
    <div class='scrollBar'>
      <div class='circle' />
    </div>
  )
}
