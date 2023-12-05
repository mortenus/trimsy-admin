import React from 'react';

type TUseAccomplish = {
  onScrollEvent: any;
  AccomplishInView: boolean;
};

export default function useAccomplish({ onScrollEvent, AccomplishInView }: TUseAccomplish) {
  const [scrollMove, setScrollMove] = React.useState<number | boolean>(false);

  React.useEffect(() => {
    // handleMove();

    if (AccomplishInView) {
      //   setScrollMove((scrollHeight / 30) * 4);
      setScrollMove(window.scrollY);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScrollEvent]);

  //   const handleMove = () => {
  // if (scrollHeight <= 700) {
  //   setScrollMove(false);
  // }

  // if (scrollHeight >= 1400) {
  //   setScrollMove(true);
  // }

  // if (scrollHeight <= 1600 && scrollHeight >= 400) {
  // if (isVisible) {
  //   const a = (scrollHeight / 30) * 4;
  //   setScrollMove(a);
  // }
  //   };

  return { scrollMove };
}
