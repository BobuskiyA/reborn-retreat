import React, { useState } from 'react'
import { MenuButton } from './MenuButton/MenuButton';
import { AnimatePresence } from 'framer-motion';
import { Body } from './Body/Body';

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

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
