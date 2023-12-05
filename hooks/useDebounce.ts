import React from 'react';

function useDebounce<T extends any[]>(
  fn: (...args: T) => void,
  delay: number,
  deps: React.DependencyList,
) {
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);
  return React.useCallback(
    (...args: T) => {
      clearTimeout(timeoutId!);
      const id = setTimeout(() => {
        fn(...args);
      }, delay);
      setTimeoutId(id);
    },
    [fn, delay, timeoutId, ...deps],
  );
}

export default useDebounce;
