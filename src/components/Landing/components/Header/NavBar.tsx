import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useDimensions } from '../../../../hooks/useDimensionst';
import rwd from '../../../../styles/rwd';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${(height * 2 + 200) / 10}rem at 4rem 3.8rem)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(3rem at 4rem 3.8rem)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const StyledMotionNav = styled(motion.nav)`
  position: relative;
  height: 100%;
  width: 30rem;
  margin-right: auto;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30rem;
    height: 100vh;
    background: #fff;
  }

  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 1.6rem;
    left: 1.5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 2.5rem;
    position: absolute;
    top: 10rem;
    width: 23rem;
  }

  li {
    list-style: none;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon-placeholder {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    flex: 4rem 0;
    margin-right: 2rem;
  }

  .text-placeholder {
    border-radius: 0.5rem;
    width: 20rem;
    height: 2rem;
    flex: 1;
  }

  .refresh {
    padding: 1rem;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    width: 2rem;
    height: 2rem;
    top: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  ${rwd.DESKTOP(css`
    display: none;
  `)}
`;

export const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <StyledMotionNav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </StyledMotionNav>
  );
};

const itemIds = [0, 1, 2, 3, 4];
const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  return (
    <motion.ul variants={navigationVariants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem: React.FC<{ i: number }> = ({ i }) => {
  const style = { border: `0.2rem solid ${colors[i]}` };
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="2.3rem" height="2.3rem" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
