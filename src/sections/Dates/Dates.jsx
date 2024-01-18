import React, { useState } from "react";

import "./Dates.scss";
import packagesData from "@/data/dates.json";
import { motion } from "framer-motion";
import { calendarAnim } from "@/helpers/anim";

const numbers = Array.from({ length: 30 }, (_, i) => i + 1);

export const Dates = () => {
  const [selectedCard, setSelectedCard] = useState({
    isActive: false,
    index: null,
  });

  const handleAnim = (index, secId = null) => {
    if (
      selectedCard.isActive &&
      selectedCard.index !== index &&
      selectedCard.index !== 0
    ) {
      return "open";
    }

    return "closed";
  };

  const handleSelected = (con, i, secondIndex = null) => {
    if(secondIndex) {
      return setSelectedCard({ isActive: con, index: i, secondIndex});
    }
    return setSelectedCard({ isActive: con, index: i});
  };  

  return (
    <section className="dates" id="packages">
      <h1>Packages and entrance dates</h1>
      <div className="dates__wrapper">
        <div className="calendar">
          <motion.img
            src="/images/star-orange.svg"
            alt="star"
            className="calendar__star"
            initial={{ rotate: '0deg' }}
            animate={{ rotate: selectedCard.isActive ? '10deg' : '0deg' }}
          />
          <motion.img
            src="/images/doodles.svg"
            alt="star"
            className="calendar__doodles"
            initial={{ rotate: '0deg' }}
            animate={{ rotate: selectedCard.isActive ? '-15deg' : '0deg' }}
          />
          <h1 className="calendar__mounth">April</h1>
          <ul class="calendar__weekdays">
            <li>S</li>
            <li>M</li>
            <li>T</li>
            <li>W</li>
            <li>T</li>
            <li>F</li>
            <li>S</li>
          </ul>
          <ul class="calendar__days">
            <li></li>
            {numbers.slice(0, 10).map((currNum) => (
              <motion.li
                key={currNum}
                class="calendar__day"
                variants={calendarAnim.dates}
                animate={handleAnim(1)}
                onMouseOver={() => handleSelected(true, 1)}
                onMouseLeave={() => handleSelected(false, 1)}
              >
                <p className="type-1">
                  <span>{currNum}</span>
                </p>
              </motion.li>
            ))}
              <motion.li
                class="calendar__day calendar__day--welcomed"
                variants={calendarAnim.dates}
                animate={handleAnim(2)}
                onMouseOver={() => handleSelected(true, 1)}
                onMouseLeave={() => handleSelected(false, 1)}
              >
                <p className="type-2">
                  <span>10</span>
                </p>
              </motion.li>
            {numbers.slice(10, 20).map((currNum) => (
              <motion.li
                key={currNum}
                class="calendar__day"
                variants={calendarAnim.dates}
                animate={handleAnim(2)}
                onMouseOver={() => handleSelected(true, 2)}
                onMouseLeave={() => handleSelected(false, 2)}
              >
                <p className="type-2">
                  <span>{currNum}</span>
                  {currNum === 20 && <span className="line" />}
                </p>
              </motion.li>
            ))}
            <motion.li
                class="calendar__day calendar__day--welcomed-2"
                variants={calendarAnim.dates}
                animate={handleAnim(3)}
                onMouseOver={() => handleSelected(true, 1)}
                onMouseLeave={() => handleSelected(false, 1)}
              >
                <p className="type-3">
                  <span>20</span>
                </p>
              </motion.li>
            {numbers.slice(20, 30).map((currNum) => (
              <motion.li
                key={currNum}
                class="calendar__day"
                variants={calendarAnim.dates}
                animate={handleAnim(3)}
                onMouseOver={() => handleSelected(true, 3)}
                onMouseLeave={() => handleSelected(false, 3)}
              >
                <p className="type-3">{currNum}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="packages">
          <ul className="packages__list">
            {packagesData.map((d, index) => (
              <motion.li
                key={`pack-${index}`}
                className="packages__item"
                variants={calendarAnim.cards}
                onMouseOver={() => handleSelected(true, index)}
                onMouseLeave={() => handleSelected(false, index)}
                animate={handleAnim(index)}
              >
                <span
                  className="packages__title"
                  style={{ backgroundColor: d.color }}
                >
                  {d.name}
                </span>
                <div className="packages__card-content">
                  <p className="packages__term">{d.term}</p>
                  <hr
                    style={{
                      backgroundColor: d.color,
                    }}
                    className="packages__line"
                  />
                  <p>Entrance dates:</p>
                  <p className="packages__entrance">{d.entrance}</p>
                  <p className="packages__welcomed">
                    (is welcomed the {d.welcomed})
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
