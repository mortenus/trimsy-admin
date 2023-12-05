import { useIsVisible } from 'hooks/useIsVisible';
import React from 'react';
import useResize from './hooks/useResize';
import useSwiper from './hooks/useSwiper';
import styles from './Swiper.module.scss';

interface SwiperProps {
  images: string[];
}

const Swiper: React.FC<SwiperProps> = ({ images }) => {
  const ref = React.useRef(null);
  const isVisible = useIsVisible({ ref });

  const {
    activeIndex,
    prevIndex,
    nextIndex,
    handlePrev,
    handleNext,
    handlePlayPause,
    isPlaying,
    handlePaginationClick,
  } = useSwiper({ images, autoPlayDuration: 3500, isVisible });

  const size = useResize();

  return (
    <>
      <div className={styles.swiper} ref={ref}>
        <div
          className={styles['swiper-wrapper']}
          style={{
            transform: `translate3d(${activeIndex * (size !== null ? -size : 0)}px, 0px, 0px)`,
            transition: `transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s`,
          }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={[
                styles['swiper-slide'],
                index === prevIndex && styles['prev'],
                index === nextIndex && styles['next'],
                index === activeIndex && styles['active'],
              ]
                .filter(Boolean)
                .join(' ')}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translate(${index * (size !== null ? size : 0)}px, 0px)`,
              }}
            />
          ))}
        </div>

        <ul className={styles.buttons}>
          <li className={styles.prevButton} onClick={handlePrev}>
            <button></button>
          </li>
          <li className={styles.nextButton} onClick={handleNext}>
            <button></button>
          </li>
        </ul>
      </div>
      <button className={styles.playButton} onClick={handlePlayPause}>
        {!isPlaying ? (
          <svg
            style={{ position: 'relative', left: '1px' }}
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.525 13.0248C1.19167 13.2415 0.854333 13.2542 0.513 13.0628C0.171666 12.8715 0.000666667 12.5755 0 12.1748V1.82485C0 1.42485 0.171 1.12885 0.513 0.936846C0.855 0.744846 1.19233 0.757512 1.525 0.974846L9.675 6.14985C9.975 6.34985 10.125 6.63318 10.125 6.99985C10.125 7.36651 9.975 7.64985 9.675 7.84985L1.525 13.0248Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" fill="white" />
          </svg>
        )}
      </button>
      <div className={styles['swiper-pagination']}>
        {images.map((_, index) => (
          <div
            key={index}
            className={[
              styles['swiper-pagination-bullet'],
              index === activeIndex && styles['active'],
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={handlePaginationClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Swiper;
