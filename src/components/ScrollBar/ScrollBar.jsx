import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import './ScrollBar.scss'
import { scrollBarAnim } from '@/helpers/anim';

export const ScrollBar = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.root',
          start: 'top top',
          end: '100%',
          scrub: true,
        }
      });

      tl.to('.circle', {
        bottom: '1%',
        translateY: "-10%",
        ease: 'none',
      })
  }, [])

  return (
    <motion.div
      variants={scrollBarAnim}
      initial="initial"
      animate="enter"
      class='scrollBar'
    >
      <div class='circle' />
    </motion.div>
  )
}
