import React from "react";
import bringData from "@/data/questionnaire.json";
import "./Questionnaire.scss";
import { Button } from "@/components/Button/Button";

export const Questionnaire = () => {
  return (
    <section className="questionnaire">
      <div className="questionnaire-container">
        <div className="questionnaire-block health">
          <h1>Health Questionnaire</h1>
          <p>
            Reborn Retreat Thailand 2024 requires participants to complete a
            health questionnaire for better personal approach taking into
            account the health state of each individual.
          </p>
          <Button
            title="Start"
            to="/"
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
          <Button
            title="Start"
            to="/"
            customClass="questionnaire__button laughter"
          />
        </div>
      </div>
    </section>
  );
};
