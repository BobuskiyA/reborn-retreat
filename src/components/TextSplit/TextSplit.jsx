import { motion, useInView } from 'framer-motion';
import React, { FC, useRef } from 'react';

import './TextSplit.scss';

const slideUp = {
  initial: {
    y: '100%',
  },
  open: (i) => ({
    y: '0%',
    transition: {
      duration: 0.8,
      delay: (0.01 * i) + 0.2,
      ease: [0.27,0.55,0.41,1]
    },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};

export const TextSplit = ({
  phrase,
}) => {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <p
      ref={description}
      className="text_split"
    >
      {phrase.split(' ').map((word, index) => (
        <span
          key={index}
          className="text_split__mask"
        >
          <motion.span
            variants={slideUp}
            custom={index}
            animate={isInView ? 'open' : 'closed'}
            key={word}
          >
            {word}
            &nbsp;
          </motion.span>
        </span>
      ))}
    </p>
  );
};
