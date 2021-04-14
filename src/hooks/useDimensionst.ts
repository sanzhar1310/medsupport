import { RefObject, useEffect, useRef } from 'react';

export const useDimensions = ({
  current,
}: RefObject<HTMLElement>): {
  width: number;
  height: number;
} => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (current) {
      dimensions.current.width = current.offsetWidth;
      dimensions.current.height = current.offsetHeight;
    }
  }, [current]);

  return dimensions.current;
};
