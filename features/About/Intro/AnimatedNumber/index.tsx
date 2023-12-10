// import React from 'react';
// import { useSpring, animated } from 'react-spring';

type TNumberCounter = {
  endValue: number;
};

// function NumberCounter({ endValue }: TNumberCounter) {
//   const { number } = useSpring({
//     from: { number: 0 },
//     to: { number: endValue },
//     config: {
//       duration: 3000, // total duration of the animation
//       easing: (t: number) => {
//         if (t < 0.2) return (t / 0.2) * 0.5;
//         if (t > 0.8) return ((1 - t) / 0.2) * 0.5 + 0.5;
//         return ((t - 0.2) / 0.6) * 0.5 + 0.5;
//       },
//       //   easing: (t: number) => {
//       //     // custom easing function
//       //     if (t < 0.2) return t * 5; // ease at the start
//       //     if (t > 0.8) return (1 - t) * 5 + 1; // ease at the end
//       //     return 1; // rapid increase in the middle
//       //     // return 1;
//       //   },
//     },
//     delay: 500,
//     reset: true,
//   });

//   React.useEffect(() => {
//     // setTimeout(() => {
//     // number.start();
//     // }, 10000);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return <animated.span>{number.to((n: number) => n.toFixed(0))}</animated.span>;
// }

import { useSpring, animated } from 'react-spring';

function NumberCounter({ endValue }: TNumberCounter) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: endValue },
    config: {
      duration: 1500,
      //   easing: (t: number) => {
      //     if (t < 0.2) return (t / 0.2) * 0.5;
      //     if (t > 0.8) return ((1 - t) / 0.2) * 0.5 + 0.5;
      //     return ((t - 0.2) / 0.6) * 0.5 + 0.5;
      //   },
      //   easing: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },

    delay: 0,
    // reset: true,
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

export default NumberCounter;
