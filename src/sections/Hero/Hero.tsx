import { FC, useRef, useEffect, Dispatch, SetStateAction } from "react";
import gsap from "gsap";
import "./Hero.scss";

type Props = {
  loaderFinished: boolean;
  showPage: (value: boolean) => void;
};

const heroAnim = (tl: gsap.core.Timeline, onComplete: () => void) => {
  tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to(".hero", {
    opacity: 1,
    duration: 1,
  })
    .to(".hero-front", {
      x: "20vw",
      scale: 0.8,
      delay: 0.2,
      duration: 0.7,
      ease: "power2.inOut",
    })
    .to(".hero__content", {
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut",
    });

  return tl;
};

const Hero: FC<Props> = ({ showPage, loaderFinished }) => {
  useEffect(() => {
    if (loaderFinished) {
      const tl = gsap.timeline();

      tl.add(heroAnim(tl, () => showPage(true)));
    }
  }, [loaderFinished]);

  return <section className="hero" data-hidden></section>;
};

export default Hero;
