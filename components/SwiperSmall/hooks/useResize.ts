import useDebounce from 'hooks/useDebounce';
import React from 'react';

const useResize = () => {
  const [size, setSize] = React.useState<number | null>(null);
  const [screenWidth, setScreenWidth] = React.useState<number | null>(null);

  const handleResize = useDebounce(
    () => {
      setScreenWidth(window.innerWidth);
    },
    100,
    [screenWidth],
  );

  React.useEffect(() => {
    handleResize();
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  React.useEffect(() => {
    if (screenWidth !== null) {
      if (screenWidth >= 1441) {
        setSize(525);
      } else if (screenWidth >= 1068) {
        setSize(550);
      } else if (screenWidth >= 734) {
        setSize(450);
      } else if (screenWidth <= 734) {
        setSize(375);
      }
    }
  }, [screenWidth]);

  return size;
};

export default useResize;
