import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'components';

import styles from './Banner.module.scss';

import useBanner from './hooks/useBanner';

const Banner = () => {
  const blogHeadlineRef = React.useRef(null);

  const { useAnimateBackgroundPosition, isHeadlineVisible } = useBanner({ blogHeadlineRef });

  return (
    <div className={styles.moreWrap} id={'contact'}>
      {/* <Link href="/blog"> */}
      <div className={styles.potential}>
        <div className={styles.logo}>
          <div className={styles.img}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src={'/images/mini-logo.png'}
              alt="HR image"
              loading={'lazy'}
              quality={'100'}
            />
          </div>
          <h2
            style={{
              backgroundPosition: `${useAnimateBackgroundPosition(
                isHeadlineVisible,
                0,
                -179,
                1750,
                600,
              )}px 50%`,
            }}
            ref={blogHeadlineRef}>
            Blog
          </h2>
        </div>
        <p>Read new releases, get updates and latest news.</p>

        <Button color={'black'} to={'/blog'} size={'small'}>
          Read more
        </Button>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Banner;
