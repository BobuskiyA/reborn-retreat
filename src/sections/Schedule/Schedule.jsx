import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import scheduleList from "@/data/schedule.json";

import "./Schedule.scss";
export const Schedule = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
      scrollTrigger: {
        trigger: '.schedule',
        start: 'top 18%',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to('.schedule__flower', {
      rotate: 150,
    })
  }, [])

  return (
    <section className="schedule">
      <ul className="schedule__list">
        {scheduleList.map((currSced, index) => (
          <li className="schedule__item" key={`schedule-${index}`}>
            <div className="schedule__text">
              <h1>{currSced.title}</h1>
              {currSced.text.map((t) => (
                <>
                  <p>{t}</p>
                  <br />
                </>
              ))}
            </div>
            <img src={currSced.image} alt={`image_${currSced.title}`} className="schedule__image"/>
          </li>
        ))}
      </ul>
      <img src="/images/schedule-flower.svg
" alt="flower" className="schedule__flower"/>
      <img src="/images/schedule-rectangle.svg
" alt="rectangle" className="schedule__rectangle"/>
      <img src="/images/discover/discover-2.svg
" alt="dots" className="schedule__dots"/>
    </section>
  );
};