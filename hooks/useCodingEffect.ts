import React from 'react';

type TUseCodingEffect = {
  children: string;
  inView: boolean;
};

export default function useCodingEffect({ children, inView }: TUseCodingEffect) {
  const [text, setText] = React.useState('');
  const [active, setActive] = React.useState(false);

  const handleCodingEffectRun = () => {
    if (text === children) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
    if (!children || text === children) return;

    setActive(true);

    const timeout = setTimeout(() => {
      setText(children.slice(0, text.length + 1));
    }, 60);

    // const timeout2 = setTimeout(() => {
    //   setActive(false);
    // }, children.length);
    return () => {
      clearTimeout(timeout);
      //   clearTimeout(timeout2);
    };
  };

  React.useEffect(() => {
    if (inView) handleCodingEffectRun();

    // To restart component
    // if (!inView) setText('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, text]);

  return { text, active };
}
