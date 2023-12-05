import React from 'react';

interface UseIsVisibleProps {
  ref: React.RefObject<HTMLElement>;
  once?: boolean;
}

export const useIsVisible = ({ ref, once }: UseIsVisibleProps): boolean => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight && bottom >= 0);
      }
      if (once && isVisible) {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, once, isVisible]);

  return isVisible;
};
