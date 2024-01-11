import React from "react";

import "./Included.scss";
import includedList from "@/data/included.json";
import { Button } from "@/components/Button/Button";

export const Included = () => {
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
              {inc ? (
                <svg
                  width="1.4vw"
                  height="1.4vw"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6203 0.336553C16.4202 -0.35627 14.8858 0.0548787 14.193 1.25488L6.8028 14.0551L4.68216 10.382C3.98933 9.182 2.45489 8.77085 1.25489 9.46367C0.054882 10.1565 -0.356271 11.6909 0.336552 12.8909L4.48878 20.0828C4.79127 20.6067 5.25418 20.9803 5.77965 21.1772C6.95535 21.7573 8.39546 21.3322 9.06038 20.1806L18.5386 3.76382C19.2314 2.56382 18.8203 1.02938 17.6203 0.336553Z"
                    fill="#D4CE09"
                  />
                </svg>
              ) : (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6876 1.062C16.7078 0.0822001 15.1192 0.0821968 14.1394 1.062L9.21109 5.99031L4.28302 1.06224C3.30322 0.082437 1.71465 0.0824379 0.734852 1.06224C-0.244948 2.04204 -0.244952 3.63061 0.734848 4.61041L5.66292 9.53848L0.735195 14.4662C-0.244605 15.446 -0.244604 17.0346 0.735196 18.0144C1.715 18.9942 3.30356 18.9942 4.28336 18.0144L9.21109 13.0866L14.1391 18.0146C15.1189 18.9944 16.7074 18.9944 17.6872 18.0146C18.667 17.0348 18.667 15.4462 17.6872 14.4664L12.7593 9.53848L17.6876 4.61017C18.6674 3.63037 18.6674 2.0418 17.6876 1.062Z"
                    fill="#B6B6B6"
                    fill-opacity="0.5"
                  />
                </svg>
              )}
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
