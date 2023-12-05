import React from 'react';
import { useIsVisible } from 'hooks/useIsVisible';

interface UseIsVisibleProps {
  ref: React.RefObject<HTMLElement>;
}

const useAnimation = ({ ref }: UseIsVisibleProps) => {
  const [isGradientAnimationPaused, setIsGradientAnimationPaused] = React.useState(false);

  const handleToggleAnimation = () => {
    setIsGradientAnimationPaused(!isGradientAnimationPaused);
    setIsStoppedByUser(!isStoppedByUser);
  };

  const [isStoppedByUser, setIsStoppedByUser] = React.useState(false);
  const isVisible = useIsVisible({ ref });

  React.useEffect(() => {
    if (!isStoppedByUser) setIsGradientAnimationPaused(!isGradientAnimationPaused);
  }, [isVisible]);

  return { isGradientAnimationPaused, handleToggleAnimation };
};

export default useAnimation;
