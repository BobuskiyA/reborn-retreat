import React from "react";

import "./Dates.scss";

const numbers = Array.from({ length: 30 }, (_, i) => i + 1);

export const Dates = () => {
  return (
    <section className="dates">
      <h1>Packages and entrance dates</h1>
      <div className="calendar">
        <img
          src="/images/star-orange.svg"
          alt="star"
          className="calendar__star"
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
            <li key={currNum} class="calendar__day">
              <p className="type-1">{currNum}</p>
            </li>
          ))}
          {numbers.slice(10, 20).map((currNum) => (
            <li key={currNum} class="calendar__day">
              <p className="type-2">{currNum}</p>
            </li>
          ))}
          {numbers.slice(20, 30).map((currNum) => (
            <li key={currNum} class="calendar__day">
              <p className="type-3">{currNum}</p>
            </li>
          ))}
        </ul>
        {/* <ul class="calendar__days">
          {numbers.slice(6, 10).map((currNum) => (
            <li key={currNum}>{currNum}</li>
          ))}
        </ul>
        <ul class="calendar__days">
          {numbers.slice(10, 13).map((currNum) => (
            <li key={currNum}>{currNum}</li>
          ))}
        </ul>
        <ul class="calendar__days">
          {numbers.slice(13, 20).map((currNum) => (
            <li key={currNum}>{currNum}</li>
          ))}
        </ul>
        <ul class="calendar__days">
          {numbers.slice(20, 27).map((currNum) => (
            <li key={currNum}>{currNum}</li>
          ))}
        </ul>
        <ul class="calendar__days">
          {numbers.slice(27, 30).map((currNum) => (
            <li key={currNum}>{currNum}</li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};
