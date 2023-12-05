import React from 'react';

interface TUseSwiper {
  items: Object[];
  autoPlayDuration?: number;
  isVisible: boolean;
}

const useSwiper = ({ items, autoPlayDuration = 3500, isVisible }: TUseSwiper) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isStoppedByUser, setIsStoppedByUser] = React.useState(false);
  const [lastUpdateTime, setLastUpdateTime] = React.useState(Date.now());

  const numItems = items.length;
  const prevIndex = (activeIndex - 1 + numItems) % numItems;
  const nextIndex = (activeIndex + 1) % numItems;

  React.useEffect(() => {
    if (!isStoppedByUser) handleIsPlayingChange();
  }, [isVisible]);

  const handleIsPlayingDisable = () => {
    setIsPlaying(false);
    setIsStoppedByUser(true);
  };

  const handleIsPlayingChange = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const throttleFunction = (callback: Function) => {
    if (Date.now() - lastUpdateTime > autoPlayDuration / 12) {
      setLastUpdateTime(Date.now());
      callback();
    }
  };

  const handlePrev = () => {
    throttleFunction(() => {
      handleIsPlayingDisable();
      setActiveIndex(prevIndex);
    });
  };

  const handleNext = () => {
    throttleFunction(() => {
      handleIsPlayingDisable();
      setActiveIndex(nextIndex);
    });
  };

  const handlePaginationClick = (index: number) => () => {
    throttleFunction(() => {
      handleIsPlayingDisable();
      setActiveIndex(index);
    });
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      setActiveIndex(nextIndex);
      setIsStoppedByUser(false);
    } else {
      setIsStoppedByUser(true);
    }

    handleIsPlayingChange();
    setLastUpdateTime(Date.now());
  };

  //   React.useEffect(() => {
  //     let interval: NodeJS.Timeout | null = null;

  //     if (isPlaying) {
  //       interval = setInterval(() => setActiveIndex(nextIndex), autoPlayDuration);
  //     }

  //     return () => {
  //       if (interval) {
  //         clearInterval(interval);
  //       }
  //     };
  //   }, [isPlaying, nextIndex]);

  return {
    activeIndex,
    prevIndex,
    nextIndex,
    handlePrev,
    handleNext,
    handlePlayPause,
    isPlaying,
    handlePaginationClick,
  };
};

export default useSwiper;
