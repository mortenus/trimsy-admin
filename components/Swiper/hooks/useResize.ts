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
        setSize(1265);
      } else if (screenWidth >= 1068) {
        setSize(995);
      } else if (screenWidth >= 734) {
        setSize(704);
      } else if (screenWidth <= 734) {
        setSize(425);
      }
    }
  }, [screenWidth]);

  return size;
};

export default useResize;
