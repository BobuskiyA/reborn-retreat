import React, { useEffect } from "react";

import "./Hero.scss";
import { Button } from "@/components/Button/Button";
import gsap from "gsap";

// const heroAnim = (tl, onComplete) => {
//   tl = gsap.timeline({
//     onComplete: onComplete
//   });

//   tl
//   .to('#hero-star', {
//     left: 'auto',
//     top: 'auto',
//     rotate: 300,
//     duration: 3,
//     delay: 0.4,
//     ease: "power3.inOut"
//   });

//   tl
//     .to('.hero__decor-1, .hero__line', {
//       clipPath: 'inset(0 0% 0 0)',
//       duration: 2,
//       ease: "expo.inOut"  
//     }, '-=1')
//     .to('#hero-text', {
//       opacity: 1,
//       yPercent: 0,
//       duration: 1,
//       ease: "power3.inOut"  
//     }, '-=1')
//     .to('.hero__image', {
//       clipPath: 'inset(0% 0 0 0)',
//       duration: 2,
//       ease: "expo.inOut"  
//     }, '-=1')
// };

export const Hero = ({ setLoaderFinished, showPage }) => {

  // useEffect(() => {
  //   gsap.set('#hero-star', { 
  //       top: '50%',
  //       left: '50%',
  //     })

  //     gsap.set('#hero-text', {
  //       opacity: 0,
  //       yPercent: 10, 
  //     })
      
  //     gsap.set('.hero__image', {
  //       clipPath: 'inset(100% 0 0 0)'
  //     })

  //     gsap.set('.hero__decor-1, .hero__line', {
  //       clipPath: 'inset(0 100% 0 0)'
  //     })

  //     const tl = gsap.timeline();

  //     tl.add(heroAnim(tl, () => showPage(true)))
  //   }, [])

  return (
    <section className="hero" id="top">
      <img
        src="/images/hero-1.svg"
        alt="decor-1 hero"
        className="hero__decor hero__decor-1"
      />
      <div className="hero__wrapper">
        <div className="hero__image-wrapper">
          <img
            src="/images/hero-image.jpg"
            className="hero__image"
            alt="hero"
          />
        </div>
        <div className="hero__text">
          <h1 className="big-text">Reborn Retreat</h1>

          <span className="hero__line" />

          <h1 id="hero-text">
            Revive the inner child and
            <br />
            plant a seed
            <br />
            of love
          </h1>
          <Button
            title="Join Us"
            to="/"
            customClass="hero__button"
            // data-hidden
          />
        </div>

        <img
          src="/images/star-purple.svg"
          alt="hero star"
          className="hero__decor hero__decor-2"
          id="hero-star"
        />
      </div>
    </section>
  );
};
