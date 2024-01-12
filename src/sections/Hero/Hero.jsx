import React, { useEffect } from "react";
import gsap from "gsap";

import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import "./Hero.scss";
import { Button } from "@/components/Button/Button";

const heroAnim = (tl, onComplete) => {
  tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to("#hero-star", {
    left: "auto",
    top: "auto",
    rotate: 300,
    duration: 3,
    delay: 0.4,
    ease: "power3.inOut",
  });

  tl.to(".hero__text .char-mask .char", {
    yPercent: 10,
    ease: 'expo.out',
    duration: 1,
    stagger: 0.02
  })

  tl.to(
    ".hero__decor-1, .hero__line",
    {
      clipPath: "inset(0 0% 0 0)",
      duration: 2,
      delay: 0.5,
      ease: "expo.inOut",
    },
    "-=1"
  )
    .to(
      "#hero-text, .hero__button",
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .to(
      ".hero__image",
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 2,
        ease: "expo.inOut",
      },
      "-=1"
    );
};

export const Hero = ({ setLoaderFinished, showPage }) => {
  useEffect(() => {
    Splitting();

    gsap.set("#hero-star", {
      top: "50%",
      left: "50%",
    });

    gsap.set("#hero-text, .hero__button", {
      opacity: 0,
      yPercent: 10,
    });

    gsap.set(".hero__image", {
      clipPath: "inset(100% 0 0 0)",
    });

    gsap.set(".hero__decor-1, .hero__line", {
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(".hero__text .char-mask .char", {
      yPercent: 110
    })

    const tl = gsap.timeline();

    tl.add(heroAnim(tl, () => showPage(true)));
  }, []);

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
          <h1 className="big-text">
            <span data-splitting="words">
              <span className="char-mask" data-splitting="chars">
                Reborn Retreat
              </span>
            </span>
          </h1>

          <span className="hero__line" />

          <h1 id="hero-text">
            Revive the inner child and
            <br />
            plant a seed
            <br />
            of love
          </h1>
          <Button title="Join Us" to="/" customClass="hero__button" />
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
