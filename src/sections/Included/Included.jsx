import React from "react";

import "./Included.scss";
import includedList from "@/data/included.json";
import { Button } from "@/components/Button/Button";

export const Included = () => {
  const handleImage = (isIncluded) => {
    return `/images/${isIncluded ? 'check' : 'cross'}.svg`
  }

  return (
    <section className="included">
      <header className="included__head">
        <th
          className="included__head-item included__head-item--main"
          style={{ backgroundColor: "#F9F5EF" }}
        >
          <p className="included__head-title">
            What's included
          </p>
        </th>
        <th
          className="included__head-item"
          style={{ backgroundColor: "#E4D47F" }}
        >
          <p className="included__head-title">Full Package</p>
          <p className="included__head-price">$3,000</p>
        </th>
        <th
          className="included__head-item"
          style={{ backgroundColor: "#C3C2E1" }}
        >
          <p className="included__head-title">FIRST ENTRANCE</p>
          <p className="included__head-price">$1,300</p>
        </th>
        <th
          className="included__head-item"
          style={{ backgroundColor: "#FFB087" }}
        >
          <p className="included__head-title">THAI MASSAGE</p>
          <p className="included__head-price">$1,500</p>
        </th>
        <th
          className="included__head-item"
          style={{ backgroundColor: "#C6E1DF" }}
        >
          <p className="included__head-title">LAST ENTRANCE</p>
          <p className="included__head-price">$1,300</p>
        </th>
      </header>
      {includedList.map((currItem, index) => (
        <div className="included__content" key={`included_${index}`}>
          <td className="included__content-item included__content-text">
            {currItem.activity}
          </td>
          {currItem.included.map((inc, i) => (
            <td
              className="included__content-item included__content-check"
              key={i}
            >
              <img
                src={handleImage(inc)}
                alt="check"
                className="included__check"
              />
            </td>
          ))}
        </div>
      ))}
      <footer className="included__footer">
        <h2>
          Contact us and let's start this amazing journey together
        </h2>
        <Button
          customClass="included__footer-button"
          to="/"
          title="Join Us"
        />
      </footer>
    </section>
  );
};
