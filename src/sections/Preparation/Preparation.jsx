import React from "react";

import "./Preparation.scss";
import preparationList from "@/data/preparation.json";

export const Preparation = () => {
  return (
    <section className="preparation" id="preparation">
      <h1>Preparation</h1>

      <div className="preparation__wrapper">
        <ul className="preparation__list">
          {preparationList.slice(0, 3).map((currPrerp, index) => (
            <li key={`preparation-${index}`} className="preparation__item">
              <img
                src={currPrerp.image}
                alt={`step-${index}`}
                className={`preparation__list-image preparation__list-image-1list-${index + 1}`}
              />
              <p className={`preparation__list-text preparation__list-text-1list-${index + 1}`}>{currPrerp.text}</p>
              {currPrerp.link && (
                <div dangerouslySetInnerHTML={{ __html: currPrerp.link }} />
              )}
            </li>
          ))}
        </ul>

        <ul className="preparation__list">
          {preparationList.slice(3, 6).map((currPrerp, index) => (
            <li key={`preparation-${index}`} className="preparation__item">
              <img
                src={currPrerp.image}
                alt={`step-${index}`}
                className={`preparation__list-image preparation__list-image-${index}`}
              />
              {!currPrerp.link ? (
                <p className="preparation__list-text">{currPrerp.text}</p>
              ) : (
                <div className={`preparation__list-text preparation__list-text-2list-${index + 1}`} dangerouslySetInnerHTML={{ __html: currPrerp.text }} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
