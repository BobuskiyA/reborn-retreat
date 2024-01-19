export const calendarAnim = {
  cards: {
    initial: {
      opacity: 1,
      transition: { duration: 0.35 },
    },
    open: {
      opacity: 0.6,
      transition: { duration: 0.35 },
    },
    closed: {
      opacity: 1,
      transition: { duration: 0.35 },
    },
  },
  dates: {
    initial: {
      opacity: 1,
      filter: 'blur(0)',
      transition: { duration: 0.35 },

    },
    open: {
      opacity: 0.4,
      filter: 'blur(1vw)',
      transition: { duration: 0.35 },

    },
    closed: {
      opacity: 1,
      filter: 'blur(0)',
      transition: { duration: 0.35 },
    },
  },
};

export const Menu = {
  menuOpen: {
    initial: {
      height: 0,
      left: 0,
      right: 0,
    },
    enter: {
      height: "100lvh",
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
};

export const scrollBarAnim = {
  initial: {
    right: '-4%',
  },
  enter: {
    right: '0%',
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    }
  }
}
export const headerAnim = {
  initial: {
    top: '-24%',
  },
  enter: {
    top: '0%',
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    }
  }
}

