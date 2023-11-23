import { FC, MutableRefObject, useEffect, useRef } from 'react';
import gsap from 'gsap'

import './Loader.scss'
import { Logo } from '../Logo/Logo';

function getRandomPower() {
  const powers = ['in', 'out', 'inOut'];
  const randomPower = Math.floor(Math.random() * 5) + 1;
  const randomEase = powers[Math.floor(Math.random() * powers.length)];

  return `power${randomPower}.${randomEase}`;
}  

const Loader = () => {
  const progressRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline();

    tl
      .to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        delay: 0.5,
        ease: getRandomPower(),
      })
      .to('.loader', {
        opacity: 0,
        delay: 0.5,
        duration: 0.2,
      })
  })

  return (
    <section className="loader">
      <div className="loader__wrapper">
        <Logo classImage="loader__logo" />
        <div className="loader__progress-wrapper" >
          <div className="loader__progress" ref={progressRef}/>
        </div>
      </div>
    </section>
  )
}

export default Loader;
