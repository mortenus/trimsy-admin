import React from 'react';

type TFormOverflow = {
  open: boolean;
  handleOpen: () => void;
  handleKeyDownOverflowChange: React.KeyboardEventHandler<SVGElement>;
};

export default TFormOverflow;
