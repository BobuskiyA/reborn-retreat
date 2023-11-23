import { FC, useRef, useEffect } from "react";
import gsap from "gsap";
import FullWidthBg from "../../components/FullWidthBg/FullWidthBg";
import "./Hero.scss";

import heroFront from "@/images/hero/characters.png";
import heroBack from "@/images/hero/hero_background.png";
import { Logo } from "@/components/Logo/Logo";

type Props = {
  loaderFinished: boolean;
};

const heroAnim = (tl: gsap.core.Timeline) => {
  tl = gsap.timeline();

  tl
    //   .to('.hero', {
    //     opacity: 1,
    //     delay: 5.6,
    //     duration: 1
    //   })
    .to(".hero-front", {
      y: '46%',
      x: '32%',
      scale: 0.8,
      delay: 1,
      duration: 0.7,
      ease: "power2.inOut",
    });
  //   .to('.hero__content', {
  //     opacity: 1,
  //     duration: 0.4,
  //     ease: 'power2.inOut',
  //   })

  return tl;
};

const Hero = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(heroAnim(tl));
  });

  return (
    <section
      className="hero"
      // data-hidden
    >
      <FullWidthBg url={heroBack}>
        <img src={heroFront} alt="" className="hero-front" />
        <div
          className="hero__content"
          // data-hidden
        >
          <Logo classImage="hero__logo" />
          <h2 className="bold hero__top-text">
            The ultimate game that takes you to the fiery depths of the planet
            of Hell!
          </h2>
          <h1 className="big-text">
            <span>crazy</span>
            <span> hell</span>
          </h1>
          <p className="small-text bold hero__under-title">
            Are you prepared to construct your infernal empire and rise to the
            esteemed position of Hell's ruler in the ultimate game that plunges
            you into the fiery depths of the underworld?
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Hero;
