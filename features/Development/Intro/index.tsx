import React from 'react';

import Banner from './components/Banner';
import useAnimation from './hooks/useAnimation';

import styles from './Intro.module.scss';
import { Button } from 'components';

const Intro = () => {
  const ref = React.useRef(null);
  const { isGradientAnimationPaused, handleToggleAnimation } = useAnimation({ ref });

  return (
    <>
      <div
        id="home"
        className={styles.wrapper}
        style={{ animationPlayState: isGradientAnimationPaused ? 'paused' : 'running' }}
        ref={ref}>
        <Banner />
        <h1 style={{ visibility: 'hidden', display: 'none' }}>Trimsy</h1>
        <h3>Success is near</h3>
        <p>Discover your presence in Web the way you want.</p>
        <Button type="nav" color="transparent" to="/development/services">
          Get Started
        </Button>

        <div className={styles.pause} onClick={handleToggleAnimation}>
          {isGradientAnimationPaused ? (
            <svg
              style={{ position: 'relative', left: '1px' }}
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.525 13.0248C1.19167 13.2415 0.854333 13.2542 0.513 13.0628C0.171666 12.8715 0.000666667 12.5755 0 12.1748V1.82485C0 1.42485 0.171 1.12885 0.513 0.936846C0.855 0.744846 1.19233 0.757512 1.525 0.974846L9.675 6.14985C9.975 6.34985 10.125 6.63318 10.125 6.99985C10.125 7.36651 9.975 7.64985 9.675 7.84985L1.525 13.0248Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" fill="black" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
