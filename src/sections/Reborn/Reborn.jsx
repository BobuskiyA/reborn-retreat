import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/Button/Button";
import "./Reborn.scss";

export const Reborn = () => {
  const discountSection = useRef(null);
  const isInView = useInView(discountSection);

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

      <section className="discount" ref={discountSection}>
        <motion.img
          src="/images/percent.svg"
          alt="percent"
          className="discount__percent discount__percent-1"
          initial={{ transform: 'translateX(-18vw)' }}
          animate={{ transform: isInView ? 'translateX(0)' : 'translateX(-18vw)', transition: { duration: 0.5, delay: 0.2 }, }}
        />
        <div className="discount__wrapper">
          <h2>Ask for big discount opportunity here</h2>
          <Button to="https://t.me/ate_matos" title="Get Discount" customClass="discount__button" />
        </div>
        <motion.img
          src="/images/percent.svg"
          alt="percent"
          className="discount__percent discount__percent-2"
          initial={{ transform: 'translateX(18vw)'}}
          animate={{ transform: isInView ? 'translateX(0)' : 'translateX(18vw)', transition: { duration: 0.5, delay: 0.2 }, }}
        />
      </section>
    </section>
  );
};
