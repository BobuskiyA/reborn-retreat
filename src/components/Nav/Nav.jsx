import React, { useEffect, useState } from 'react'
import { MenuButton } from './MenuButton/MenuButton';
import { AnimatePresence } from 'framer-motion';
import { Body } from './Body/Body';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.header',
          start: 'bottom top',
          onEnter:() => setIsActive(false),
        }
      })
  }, [])

  return (
    <>
      <MenuButton
        isActive={isActive} toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />

      <AnimatePresence mode="wait">
        {isActive && <Body isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  )
}
