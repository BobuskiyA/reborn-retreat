import React, { useEffect } from "react";
import bringData from "@/data/bring.json";
import "./Bring.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Bring = () => {
  const { bring, enteringThailand, arrivingToPhangan, weatherInApril } =
    bringData;

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap
        .timeline({
        scrollTrigger: {
          trigger: '.bring',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
      .to('.bring-decor-1, .bring-decor-2', {
        rotate: gsap.utils.random(50, 100),
      })
    }, [])

  return (
    <section className="bring">
      <div className="bring-container">
        <img
          className="bring-decor-1"
          src="images/white-star.svg"
          alt="bring-decor"
        />
        <img
          className="bring-decor-2"
          src="images/bring-flower.svg"
          alt="bring-decor"
        />
        <div className="bring-content">
          <div className="bring-block">
            <ul className="bring-list">
              <h1>WHAT TO BRING</h1>
              {bring.items.map((item, index) => (
                <li key={index} className="bring-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bring-right">
          <div className="bring-block right">
            <ul className="bring-list first">
              <h1>{enteringThailand.title}</h1>
              <div className="first-text">
                {enteringThailand.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </ul>
          </div>
          <div className="bring-block right">
            <ul className="bring-list two">
              <h1>{arrivingToPhangan.title}</h1>
              <p>{arrivingToPhangan.content[0]}</p>
            </ul>
          </div>
          <div className="bring-block right">
            <ul className="bring-list three">
              <h1>{weatherInApril.title}</h1>
              <div className="three-content">
                <p>{weatherInApril.content[0].label}</p>
                <p>{weatherInApril.content[0].value}</p>
              </div>
            </ul>
          </div>
        </div>
        <img
          className="bring-decor-3"
          src="images/doodles.svg"
          alt="bring-decor"
        />
      </div>
    </section>
  );
};
