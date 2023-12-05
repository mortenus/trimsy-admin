// useScrollHandler.ts
import { useEffect, useRef } from 'react';
import debounce from 'utils/debounce';

interface ScrollHandlerProps {
  containerRef: React.RefObject<HTMLDivElement>;
  fetchData: () => void;
  isFetching: boolean | null;
}

const OFFSET_FROM_BOTTOM_WHEN_UPDATE_ON_SCROLL = 50;

export default function useScrollHandler({
  containerRef,
  fetchData,
  isFetching,
}: ScrollHandlerProps) {
  const handleScroll = debounce(() => {
    const container = containerRef.current;

    if (container && !isFetching) {
      const offset = OFFSET_FROM_BOTTOM_WHEN_UPDATE_ON_SCROLL;
      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - offset;

      if (isAtBottom) {
        fetchData();
      }
    }
  }, 200);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, handleScroll, isFetching]);

  return { handleScroll };
}
