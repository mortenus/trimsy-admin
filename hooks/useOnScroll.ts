import React from 'react';

export function useOnScroll() {
  const [onScrollEvent, setOnScrollEvent] = React.useState(null);

  React.useEffect(() => {
    const onScroll = (e: any) => {
      setOnScrollEvent(e);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { onScrollEvent };
}
