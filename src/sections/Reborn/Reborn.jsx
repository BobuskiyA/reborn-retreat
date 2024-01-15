import React from "react";
import "./Reborn.scss";
import { Button } from "@/components/Button/Button";

export const Reborn = () => {
  return (
    <section className="reborn">
      <img
        alt="flower"
        className="reborn__flower"
        src="/images/reborn-flower.svg"
      />
      <img
        alt="bee-1"
        className="reborn__bee reborn__bee-1"
        src="/images/reborn-bee.svg"
      />
      <img
        alt="bee-2"
        className="reborn__bee reborn__bee-2"
        src="/images/reborn-bee.svg"
      />
      <img
        alt="bee-3"
        className="reborn__bee reborn__bee-3"
        src="/images/reborn-bee.svg"
      />
      <div className="reborn__wrapper">
        <h2>
          Escape from detrimental habits of the past and embrace the journey
          towards cultivating a harmonious and joyous lifestyle.
        </h2>
        <p>
          Beginning the 1st of April and ending the 30th. With three different
          entrance dates, Reborn Retreat Thailand 2024 will be taking place at
          Phangan Utopia Resort located on an Island from Thailand called
          Phangan.
          <br />
          <br />
          Other than the culture each participant will bring, there is a
          beautiful blend of Indian culture from the gentleman yoga instructor
          (Chandra), Thai culinary culture from the chef, and Cuban culture from
          the main space holder (Atenea).
          <br />
          <br />
          Divided 3 times in 10 days. The second third in addition to the base
          schedule will be focused on learning about Thai Yoga Massage with Dr
          Chandra Kumar.
        </p>
      </div>
      <section className="discount">
        <img src="/images/percent.svg" alt="percent" className="discount__percent"/>
        <div className="discount__wrapper">
          <h2>Ask for big discount opportunity here</h2>
          <Button to="https://t.me/ate_matos" title="Get Discount" customClass="discount__button" />
        </div>
        <img src="/images/percent.svg" alt="percent" className="discount__percent"/>
      </section>
    </section>
  );
};
