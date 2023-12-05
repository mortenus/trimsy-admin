import useGlobe from 'hooks/useGlobe';
import useInView from 'hooks/useInView';
import Image from 'next/image';
import React from 'react';

import styles from './Globe.module.scss';

import GlobeJPG from '/public/static/img/careers/globe.jpg';

type TGlobe = {
  onScrollEvent: any;
};

const Globe = ({ onScrollEvent }: TGlobe) => {
  const globeRef = React.useRef(null);

  const { inView } = useInView({ ref: globeRef, onScrollEvent });

  const { globeToMoveVal, globeOpacity } = useGlobe({ globeRef, inView, onScrollEvent });

  return (
    <section className={styles.globeWrap} ref={globeRef}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p>We provide infinite storytelling</p>
          <p>through the fusion of vacancies</p>
          <p>in countries like Canada, Ukraine,</p>
          <p>the US, and Europe, technology and creativity.</p>
        </div>
      </div>
      <Image
        style={{
          transform: `matrix(1, 0, 0, 1, 0, ${globeToMoveVal})`,
          opacity: globeOpacity,
          willChange: 'transform',
        }}
        fill
        src={GlobeJPG}
        unoptimized={true}
        alt="Globe"
      />
    </section>
  );
};

export default Globe;
