import React from "react";
import bringData from "@/data/questionnaire.json";
import "./Questionnaire.scss";
import { Button } from "@/components/Button/Button";

export const Questionnaire = () => {
  return (
    <section className="questionnaire" id="questionnaire">
      <div className="questionnaire-container">
        <div className="questionnaire-block health">
          <h1>Health Questionnaire</h1>
          <p>
            Reborn Retreat Thailand 2024 requires participants to complete a
            health questionnaire for better personal approach taking into
            account the health state of each individual.
          </p>
          <img src="/images/q-1.svg" alt="q-1" className="questionnaire-decor"/>
          <Button
            title="Start"
            to="https://docs.google.com/forms/d/e/1FAIpQLScIjSxq8P4mEk7eaj1wgaLzxexpAmb0rkUaKkDt3rn9YlDFwQ/viewform?usp=sf_link"
            customClass="questionnaire__button health" 
          />
        </div>
        <div className="questionnaire-block laughter">
          <h1>Laughter Questionnaire</h1>
          <p>
            Reborn Retreat Thailand 2024 invites all participants and anyone
            else interested to question and honestly answer the Laughter
            Questionnaire for self laughter awareness check.
          </p>
          <img src="/images/q-2.svg" alt="q-2" className="questionnaire-decor"/>
          <Button
            title="Start"
            to="https://docs.google.com/forms/d/e/1FAIpQLScFtZ0sXO_XGOI6eDYmn9XIY68oBft2kS_Gm2q6Uln4_BWY_w/viewform?usp=sf_link"
            customClass="questionnaire__button laughter"
          />
        </div>
      </div>
    </section>
  );
};
