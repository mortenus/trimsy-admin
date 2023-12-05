import React from 'react';

import { useIsVisible } from 'hooks/useIsVisible';
import useResize from './hooks/useResize';
import useSwiper from './hooks/useSwiper';

import styles from './Testimonials.module.scss';
import { TestimonialsCard } from 'features/Testimonials';

type SwiperProps = {};

const items = [
  [
    {
      img: '/static/img/home/capacity.png',
      review_title: 'Attention to detail and creative approach',
      quote: `Trimsy delivered an aesthetic, fully functional app on time, meetings our expectations. They were highly responsive and communicative, ensuring an effective workflow.`,
      author: 'Dave Harris',
      position: 'Executive',
    },
    {
      img: '/static/img/home/kantar.png',
      review_title:
        'The range of features provided exceeded my expectations and greatly enhanced my overall experience',
      quote: 'The customer support team was responsive and helpful throughout my journey.',
      author: 'Archakov',
      position: 'Personal',
    },
  ],
];

const Testimonials: React.FC<SwiperProps> = () => {
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
  } = useSwiper({ items, autoPlayDuration: 3500, isVisible });

  const size = useResize();

  const itemWidth = size !== null ? size : 0;

  return (
    <>
      <div className={styles.swiper} ref={ref}>
        <div
          className={styles['swiper-wrapper']}
          style={
            {
              // transform: `translate3d(${activeIndex * (size !== null ? -size : 0)}px, 0px, 0px)`,
              // transition: `transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1) 0s`,
            }
          }>
          {items.map((item, index) => (
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
                visibility: index === activeIndex ? 'visible' : 'hidden',
                // transform: `translate(${index  * itemWidth}px, 0px)`,
                // transform: `translate(${
                //   (index % 3 === 0 ? itemWidth * (index - 1) : index) * (size !== null ? size : 0)
                // }px, 0px)`,
              }}>
              {item.length > 1 ? (
                <>
                  <TestimonialsCard {...item[0]} />
                  <TestimonialsCard {...item[1]} />
                </>
              ) : (
                <TestimonialsCard {...item[0]} />
              )}
              {/* <BlogItem
                key={item.slug}
                slug={item.slug}
                itemCount={0}
                // onClick={() => {}}
                // customRef={!item.slug && toNotCloseRef}
                featured={false}
                animation={false}
                // type={item.type && item.type}
                {...item.data}
              /> */}
            </div>
          ))}
        </div>

        {/* <ul className={styles.buttons}>
          <li className={styles.prevButton} onClick={handlePrev}>
            <div className={styles.arrow}>
              <svg
                // className={styles.arrow}
                style={{
                  rotate: '90deg',
                  width: '28.33333333333333',
                  height: '16.66666666666667',
                  color: '#eee',
                }}
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34 3.01486L17 20L0 3.01486L3.0175 0L17 13.9703L30.9825 0L34 3.01486Z"
                  fill="white"
                />
              </svg>
              <button></button>
            </div>
          </li>
          <li className={styles.nextButton} onClick={handleNext}>
            <div className={styles.arrow}>
              <svg
                // className={styles.arrow}
                style={{
                  rotate: '270deg',
                  width: '28.33333333333333',
                  height: '16.66666666666667',
                }}
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34 3.01486L17 20L0 3.01486L3.0175 0L17 13.9703L30.9825 0L34 3.01486Z"
                  fill="white"
                />
              </svg>
              <button></button>
            </div>
          </li>
        </ul> */}
        <div className={styles['swiper-pagination']}>
          {items.map((_, index) => (
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
      </div>
      {/* <button className={styles.playButton} onClick={handlePlayPause}>
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
      </button> */}
    </>
  );
};

export default Testimonials;
