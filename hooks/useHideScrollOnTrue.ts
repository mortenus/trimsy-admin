import React from 'react';

function preventDefault(e: any) {
  e.preventDefault();
}

export default function useHideScrollOnTrue(stateBool: boolean) {
  //   function disableScroll() {
  //     document.body.addEventListener('touchmove', preventDefault, { passive: false });
  //   }
  //   function enableScroll() {
  //     document.body.removeEventListener('touchmove', preventDefault);
  //   }

  React.useEffect(() => {
    if (stateBool) {
      document.documentElement.style.setProperty('overflow', `hidden`);
      //   disableScroll();
    } else {
      document.documentElement.style.removeProperty('overflow');
      //   enableScroll();
    }
    console.log();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateBool]);
}
