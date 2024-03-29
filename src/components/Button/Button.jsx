import React, { useEffect, useRef } from 'react'
import classNames from 'classnames';
import gsap from 'gsap';

import './Button.scss';

export const Button = ({
  to,
  title,
  customClass,
  ...rest
}) => {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in',
        },
        'enter',
      )
      .to(
        circle.current,
        {
          top: '-150%', width: '20%', duration: 0.25,
        },
        'exit',
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeline.current.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <a
      href={to}
      className={classNames(
        'button',
        { [customClass]: customClass },
      )}
      onMouseEnter={() => manageMouseEnter()}
      onMouseLeave={() => manageMouseLeave()}
      target="_blank"
      {...rest}
    >
      {title}
      <div
        ref={circle}
        className="button__circle"
      />
    </a>
  );
};
