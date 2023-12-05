import Image from 'next/image';
import React from 'react';

import { Button, ImageUnoptimized } from 'components';
import ModernButton from 'components/Button/Modern';
import { PlatformItem, Potential, ProfessionalItem, ContactForm, Globe } from 'features/Careers';

import { useOnScroll } from 'hooks/useOnScroll';

import styles from './Careers.module.scss';

Careers.title = 'Careers';

export function Careers() {
  const { onScrollEvent } = useOnScroll();

  return (
    <div>
      <h1 className={'hidden'}>Trimsy Careers</h1>
      <section className={styles.introWrap}>
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <h2>Help your team and yourself thrive with HR and training experts </h2>
            <Button to="#contact" color="white">
              Get Started
            </Button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.platform}>
            <div className={styles.platform_text}>
              <h2>One platform,</h2>
              <h2>infinite possibilities</h2>
            </div>
            <div className={styles.items}>
              <PlatformItem offset={150} onScrollEvent={onScrollEvent}>
                Get a full innovative recruitment while using new modern technologies
              </PlatformItem>
              <PlatformItem offset={250} onScrollEvent={onScrollEvent}>
                Harvest new opportunities with RP to bring your vision to life.
              </PlatformItem>
              <PlatformItem offset={350} onScrollEvent={onScrollEvent}>
                Scale seamlessly with recruiting and business solutions.
              </PlatformItem>
            </div>
            <Button to="#contact" color="white">
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        <div className={styles.background}>
          <ImageUnoptimized
            src={'/static/img/careers/intro7.jpg'}
            fill
            priority
            alt={'Intro Image'}
          />
        </div>
      </section>
      <section className={styles.wrapper}>
        <div className={styles.breaking}>
          <h2>We have the tech to make it happen-all in one place. </h2>
        </div>
      </section>
      <section className={styles.professional}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>Get your professional</h2>
            <h2>resume to boost your career</h2>
            <svg
              width="212"
              height="213"
              viewBox="0 0 212 213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M200.047 0L153.764 13.5068L172.503 0.779323C160.673 3.46165 145.727 8.70849 126.942 17.1768L96.2826 49.2514L107.165 26.8459C96.6438 32.718 85.4907 40.4161 74.7439 49.4327L67.6095 78.5667L66.0743 56.9994C55.463 66.7862 45.4839 77.6605 37.2206 89.1238C28.5374 101.131 21.7507 113.817 18.3506 126.459L5.6532 117.941C6.79109 128.679 10.3086 138.013 16.0793 146.576L0.898438 141.909C4.34823 152.557 9.98802 159.444 19.5246 165.017C14.1829 180.105 11.6768 195.873 8.98559 211.595L17.294 213C26.93 116.627 94.928 55.187 156.383 27.965L159.499 35.8398C104.546 60.5335 61.8298 102.218 39.4784 162.299C47.6513 162.344 55.6436 161.347 63.049 159.444L65.2615 131.851L71.1767 156.997C76.0986 155.185 80.614 153.01 84.6328 150.473L75.2858 130.763L90.0964 146.531C93.7088 143.631 96.689 140.369 98.9467 136.789C112.674 115.267 127.033 93.8813 155.299 75.984L134.664 68.6439L166.317 69.5954C171.465 66.9675 176.883 63.7505 180.992 60.7147L158.551 58.9024L192.281 50.9279C194.9 48.2999 197.338 45.5361 199.551 42.7722C207.362 32.8313 212.645 22.4826 211.381 13.0718C210.794 8.36413 207.995 3.9374 203.434 1.45897C202.305 0.869942 201.086 0.348883 200.047 0Z"
                fill="#858585"
              />
            </svg>
          </div>

          <div className={styles.right}>
            <div className={styles.items}>
              <ProfessionalItem offset={50} onScrollEvent={onScrollEvent}>
                Resume. Cover Letter. LinkedIn optimization.
              </ProfessionalItem>
            </div>
            <ModernButton to="#contact">Start Now</ModernButton>
          </div>
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.breaking}>
          <h2>
            Exclusive rights to candidates identified in the process, benefit from higher success
            rates and a reduction in cost-per-hire.{' '}
          </h2>
        </div>
      </section>

      <Globe onScrollEvent={onScrollEvent} />

      <Potential onScrollEvent={onScrollEvent} />

      <section id="contact" className={styles.contact}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h2>Let&apos;s Talk</h2>

            <div className={styles.content}>
              <div className={styles.left}>
                <p>
                  Find candidates that will fit your organization, whether you’re an enterprise
                  customer, software vendor, or startup.
                </p>
                <p>
                  That’s why 90% of the professionals we place in permanent jobs stay in the role
                  for two or more years.
                </p>
              </div>
              <div className={styles.right}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
