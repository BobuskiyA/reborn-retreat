import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import "./Hero.scss";
import { Button } from "@/components/Button/Button";
import { ScrollTrigger } from "gsap/all";

// const heroAnim = (tl, onComplete) => {
//   tl = gsap.timeline({
//     onComplete,
//   });

//   // tl.to("#hero-star", {
//   //   left: "auto",
//   //   top: "auto",
//   //   rotate: 360,
//   //   duration: 2,
//   //   delay: 0.4,
//   //   ease: "power3.inOut",
//   // });

//   tl.to(".hero__text .char-mask .char", {
//     yPercent: 10,
//     ease: 'expo.out',
//     duration: 1,
//     delay: 0.5,
//     stagger: 0.02
//   })

//   tl.to(
//     ".hero__decor-1, .hero__line",
//     {
//       clipPath: "inset(0 0% 0 0)",
//       duration: 1,
//       delay: 0.5,
//       ease: "expo.inOut",
//     },
//     "-=1"
//   )
//     .to(
//       "#hero-text, #hero-star, .hero__button",
//       {
//         opacity: 1,
//         yPercent: 0,
//         duration: 1,
//         ease: "power3.inOut",
//       },
//       "-=1"
//     )
//     .to(
//       ".hero__image",
//       {
//         clipPath: "inset(0% 0 0 0)",
//         duration: 1.5,
//         ease: "expo.inOut",
//       },
//       "-=1"
//     );
// };

export const Hero = ({ setLoaderFinished, showPage }) => {
  const star = useRef(null);
  const heroWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
      scrollTrigger: {
        trigger: heroWrapper.current,
        start: 'top 18%',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to(star.current, {
      rotate: 50,
    })
  }, [])

  return (
    <section className="hero" id="top" ref={heroWrapper}>
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
          <h1 className="big-text">
            Reborn Retreat
          </h1>

          <span className="hero__line" />

          <h1 id="hero-text" className="hero__subtitle">
            Revive the inner child and
            <br />
            plant a seed
            <br />
            of love
          </h1>
          <Button title="Join Us" to="https://t.me/ate_matos" customClass="hero__button" />
        </div>

        <img
          src="/images/star-purple.svg"
          alt="hero star"
          className="hero__decor hero__decor-2"
          ref={star}
        />
      </div>
    </section>
  );
};
