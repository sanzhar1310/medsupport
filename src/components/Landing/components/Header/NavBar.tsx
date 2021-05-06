import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { motion, SVGMotionProps, useCycle, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useDimensions } from '../../../../hooks/useDimensionst';
import rwd from '../../../../styles/rwd';
import { Typography } from '../../../Typography';

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
  width: 13rem;
  z-index: 1;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 35rem;
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

const ToggleLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const NavBar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
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
      {isOpen && <ToggleLayout style={{}} onClick={() => toggleOpen()} />}
    </>
  );
};

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const SocialLinkWrap = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Navigation: React.FC = () => {
  const { t } = useTranslation('landing');

  return (
    <motion.ul variants={navigationVariants}>
      <MenuItem>
        <Link href="#about">
          <Typography.Subtitle className="link">{t('header.aboutUs')}</Typography.Subtitle>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#team">
          <Typography.Subtitle className="link">{t('header.team')}</Typography.Subtitle>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#partners">
          <Typography.Subtitle className="link">{t('header.partners')}</Typography.Subtitle>
        </Link>
      </MenuItem>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem>
        <SocialLinkWrap href="https://www.instagram.com/medsupportkz/" target="__blank">
          <div className="icon-placeholder">
            <Image
              loader={({ src }) => src}
              src="/images/social/instagram.svg"
              width={32}
              height={32}
            />
          </div>
          <Typography.Subtitle>Instagram</Typography.Subtitle>
        </SocialLinkWrap>
      </MenuItem>
      <MenuItem>
        <SocialLinkWrap href="https://www.facebook.com/medsupportkz" target="__blank">
          <div className="icon-placeholder">
            <Image
              loader={({ src }) => src}
              src="/images/social/facebook.svg"
              width={32}
              height={32}
            />
          </div>
          <Typography.Subtitle>Facebook</Typography.Subtitle>
        </SocialLinkWrap>
      </MenuItem>
      <MenuItem>
        <SocialLinkWrap href="https://t.me/medsupportkz" target="__blank">
          <div className="icon-placeholder">
            <Image
              loader={({ src }) => src}
              src="/images/social/telegram.svg"
              width={32}
              height={32}
            />
          </div>
          <Typography.Subtitle>Telegram</Typography.Subtitle>
        </SocialLinkWrap>
      </MenuItem>
    </motion.ul>
  );
};

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    visibility: 'visible',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    visibility: 'hidden',
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const StyledListItem = styled(motion.li)`
  display: flex;
  align-items: center;
`;

const MenuItem: React.FC = ({ children }) => {
  return (
    <StyledListItem variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {children}
    </StyledListItem>
  );
};

const Path: React.FC<SVGMotionProps<SVGPathElement>> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<{ toggle: () => void }> = ({ toggle }) => (
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
