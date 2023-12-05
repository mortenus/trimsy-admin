import React from 'react';

const useChangeStateOnSpace = () => {
  const [state, setState] = React.useState(false);

  const handleStateChange = () => setState(!state);

  const handleKeyDown = (event: any) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleStateChange();
    }
  };

  return { handleStateChange, handleKeyDown, state, setState };
};

export default useChangeStateOnSpace;
