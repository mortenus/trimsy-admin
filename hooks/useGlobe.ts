import React from 'react';

type TUseGlobe = {
  globeRef: any;
  onScrollEvent: any;
  inView: boolean;
};

export default function useGlobe({ onScrollEvent, inView, globeRef }: TUseGlobe) {
  const [globeOpacity, setGlobeOpacity] = React.useState(0);
  const [globeToMoveVal, setGlobeToMoveVal] = React.useState(0);

  const handleMove = () => {
    if (!inView) return;

    const scrolledVal =
      (globeRef.current.offsetTop -
        onScrollEvent.target.documentElement.clientHeight -
        window.document.documentElement.scrollTop) /
      3.5;

    setGlobeToMoveVal(scrolledVal);
  };

  const handleUpdate = () => {
    const number = ((globeToMoveVal / globeRef.current.offsetHeight) * 100) / 55 + 1;
    const parsedNumber = Math.min(Math.max(number, 0), 1);
    setGlobeOpacity(parsedNumber);
  };

  React.useEffect(() => {
    handleMove();
    handleUpdate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScrollEvent]);

  return { globeToMoveVal, globeOpacity };
}
