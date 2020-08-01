export const Container = {
  width: '2.5em',
  height: '2em',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '1em',
};

export const pinkCircle = {
  display: 'block',
  width: '1.5em',
  height: '1.75em',
  backgroundColor: '#f4224b',
  borderRadius: '0.25em',
  marginRight: '0.35em',
};
export const yellowCircle = {
  display: 'block',
  width: '1.5em',
  height: '1.75em',
  backgroundColor: '#ffd008',
  borderRadius: '0.25em',
  marginRight: '0.35em',
};
export const navyCircle = {
  display: 'block',
  width: '1.5em',
  height: '1.75em',
  backgroundColor: '#1f2c4c',
  borderRadius: '0.25em',
  marginRight: '0.35em',
};
export const cyanCircle = {
  display: 'block',
  width: '1.5em',
  height: '1.75em',
  backgroundColor: '#41ceba',
  borderRadius: '0.25em',
  marginRight: '0.35em',
};
export const ContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const CircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

export const CircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

export default {
  Container,
  pinkCircle,
  yellowCircle,
  navyCircle,
  cyanCircle,
  ContainerVariants,
  CircleVariants,
  CircleTransition,
};
