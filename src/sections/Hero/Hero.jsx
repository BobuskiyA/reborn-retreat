import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import "./Hero.scss";
import { Button } from "@/components/Button/Button";
import { ScrollTrigger } from "gsap/all";

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
            <span>&nbsp;</span> plant a seed
            <br />
            <span>&nbsp;</span> of love
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
