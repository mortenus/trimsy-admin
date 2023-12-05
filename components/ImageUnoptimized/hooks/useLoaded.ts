import React from 'react';

const useLoaded = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded;
};

export default useLoaded;
