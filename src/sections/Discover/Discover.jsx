import React from 'react';

import discovers from '@/data/discovers.json';
import './Discover.scss';

export const Discover = () => {
  return (
    <section className="discover">
      <h1>
        Discover What Awaits You at Reborn Retreat
      </h1>
      
      <ul className="discover__list">
        {discovers.map((currD, index) => (
          <li key={`discover-${index}`} className="discover__item">
            <img
              src={currD.image}
              alt={`discover-${index}`}
              className="discover__image"
            />
            <p>
              {currD.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
