import React, { useState } from 'react';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowButton, CarouselContainer } from './styled';
import Image from 'next/image';
import { Button } from '../Button';

const images = [
  '/icons/landingCarousel/01.jpg',
  '/icons/landingCarousel/02.jpg',
  '/icons/landingCarousel/03.jpg',
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <CarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="motionAbsoluteItem"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="layout">
            <div className="buttonContainer">
              <Button size="large" width="190px">
                Subscribe on Instagram
              </Button>
            </div>
          </div>
          <div className="img-item">
            <Image src={images[imageIndex]} layout="fill" draggable={false} />
          </div>
        </motion.div>
      </AnimatePresence>
      <ArrowButton className="arrowButton prev" onClick={() => paginate(-1)}>
        <Image src="/icons/chevron-left.svg" layout="fill" />
      </ArrowButton>
      <ArrowButton className="arrowButton next" onClick={() => paginate(1)}>
        <Image src="/icons/chevron-right.svg" layout="fill" />
      </ArrowButton>
    </CarouselContainer>
  );
};
