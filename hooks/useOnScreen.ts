import React from 'react';

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  let observer: any = null;

  React.useEffect(() => {
    observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
