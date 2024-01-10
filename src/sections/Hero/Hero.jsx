import React from "react";

import "./Hero.scss";
import { Button } from "@/components/Button/Button";

export const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/images/hero-1.svg"
        alt="decor-1 hero"
        className="hero__decor hero__decor-1"
      />
      <div className="hero__wrapper">
        <img src="/images/hero-image.jpg" className="hero__image" alt="hero" />
        <div className="hero__text">
          <h1 className="big-text">Reborn Retreat</h1>

          <span className="hero__line" />

          <h1>
            Revive the inner child and
            <br />
            plant a seed
            <br />
            of love
          </h1>
          <Button title="Join Us" to="/" customClass="hero__button" />
        </div>
        
        <img src="/images/star-purple.svg" alt="hero star" className="hero__decor hero__decor-2"/>
      </div>
    </section>
  );
};
