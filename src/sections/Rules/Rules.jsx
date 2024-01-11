import React from "react";
import rules from "@/data/rules.json";
import "./Rules.scss";

export const Rules = () => {
  return (
    <section className="rules">
      <div className="rules-container">
        <h1>Rules</h1>
        <div className="rules-text">“To keep a pure and safe environment”</div>
        <ul className="rules__list">
          {rules.map((currD, index) => (
            <li key={`rules-${index}`} className="rules__item">
              <img
                src={currD.image}
                alt={`rules-${index}`}
                className="rules__image"
              />
              <div className="rules-content">
                <h1>{currD.title}</h1>
                <p>{currD.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="rules-description">
          These are the main requirements of the retreat to keep a pure and safe
          environment for people to open their shells and share their pearls
          with the rest. If any of these are a bigger challenge, please contact
          me and we can talk about it.
        </p>
      </div>
    </section>
  );
};
