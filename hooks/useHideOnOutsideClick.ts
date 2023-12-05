import React from 'react';

export default function useHideOnOutsideClick(
  state: boolean,
  handleState: () => void,
  ref: any,
  additionalRef?: any,
) {
  const [event, setEvent] = React.useState<null | MouseEvent>(null);

  const handleOutsideClick = (e: MouseEvent) => setEvent(e);

  const checkChangeFormVisibility = (event: MouseEvent) => {
    const path = event.composedPath();
    console.log('event called', ref.current);
    if (ref.current === null || additionalRef.current === null) return;
    console.log('contiues');
    if (!path.includes(ref.current) && !path.includes(additionalRef.current)) {
      console.log('changed');
      handleState();
    }
  };

  React.useEffect(() => {
    if (state && event !== null) checkChangeFormVisibility(event);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => document.body.removeEventListener('click', handleOutsideClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
