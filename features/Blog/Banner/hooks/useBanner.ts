import React from 'react';

import { useOnScroll } from 'hooks/useOnScroll';
import useInView from 'hooks/useInView';

type TUserBanner = {
  blogHeadlineRef: any;
};

export default function useBanner({ blogHeadlineRef }: TUserBanner) {
  const { onScrollEvent } = useOnScroll();

  const { inView: isHeadlineVisible } = useInView({
    ref: blogHeadlineRef,
    onScrollEvent,
    oneTime: true,
  });

  const useAnimateBackgroundPosition = (
    isVisible: boolean,
    startValue: number,
    endValue: number,
    duration: number,
    delay: number,
  ) => {
    const changeInValue = endValue - startValue;
    const [currentValue, setCurrentValue] = React.useState<number>(startValue);
    const animationRef = React.useRef<number | null>(null);

    const easeInOut = (
      currentTime: number,
      startValue: number,
      changeInValue: number,
      duration: number,
    ) => {
      currentTime /= duration / 2;
      if (currentTime < 1) {
        return (changeInValue / 2) * currentTime * currentTime + startValue;
      }
      currentTime--;
      return (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue;
    };

    React.useEffect(() => {
      let startTime: number | null = null;

      const animateBackgroundPosition = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;

        if (elapsed > delay) {
          const newValue = easeInOut(elapsed - delay, startValue, changeInValue, duration);
          setCurrentValue(newValue);
        }

        if (elapsed < duration + delay) {
          animationRef.current = requestAnimationFrame(animateBackgroundPosition);
        }
      };

      if (isVisible) {
        animationRef.current = requestAnimationFrame(animateBackgroundPosition);
      }

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [isVisible]); // Use isVisible as a dependency to trigger effect when it changes

    return currentValue;
  };

  return { useAnimateBackgroundPosition, isHeadlineVisible };
}
