import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import theme from '../../styles/theme';
import { Button } from '../Button';

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    background: 'transparent',
    color: 'transparent !important',
  },
  show: {
    opacity: 1,
    y: 10,
    background: theme.colors.primary,
    color: 'auto',
  },
};

const ListContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;

  * {
    z-index: 0;
  }
`;

interface Props {
  listItems: React.ReactNode[];
  toggleButtonLabel: string;
}

export const Dropdown: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibility(show ? 'visible' : 'hidden');
      clearTimeout(timeout);
    }, 500);
  }, [show]);

  return (
    <div
      style={{ position: 'relative' }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onBlur={() => {
        console.log('bluuuur');

        const timeout = setTimeout(() => {
          setShow(false);
          clearTimeout(timeout);
        }, 0);
      }}
    >
      <Button
        onClick={() => setShow((prev) => !prev)}
        variant={show ? 'primary' : 'link'}
        style={{ zIndex: 3 }}
      >
        {props.toggleButtonLabel}
      </Button>
      <ListContainer>
        <motion.ul
          animate={show ? 'show' : 'hidden'}
          variants={listVariants}
          style={{
            position: 'absolute',
            right: 0,
            visibility: show ? 'visible' : visibility,
            display: 'flex',
            flexFlow: 'column',
            gap: '0.5rem',
            borderRadius: '0.8rem',
          }}
        >
          {props.listItems.map((item, index) => (
            <motion.li
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              key={index}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </ListContainer>
    </div>
  );
};
