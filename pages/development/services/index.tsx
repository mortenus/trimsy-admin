import React from 'react';

import styles from './services.module.scss';
import { Card, CompareTable } from 'features/Services';
import { Product } from 'features/Development';
import clsx from 'clsx';
import { Button, SwiperSmall } from 'components';
import Image from 'next/image';

Services.title = 'Web';

type TServices = {
  items: any;
  handleFormChange: () => void;
  handleKeyDownOverflowChange?: (e: any) => void;
};

export default function Services({ items, handleFormChange }: TServices) {
  return (
    <div>
      <Card
        serviceName="Web Advanced"
        isNew={true}
        serviceHeadline="Beyond."
        href="/development/services/advanced"
        imgSrc="/static/img/services/archakovBlog.jpg"
        backgroundColor="#F8F8F8"
      />
      <Card
        serviceName="eCommerce"
        serviceHeadline="Awesome"
        href="/development/services/ecommerce"
        backgroundColor="#E7F6FF">
        <Product />
      </Card>

      <CompareTable />

      <section className={styles.more}>
        <div className={styles.blog}>
          <SwiperSmall items={items} />
        </div>
        <div className={styles.featured}>
          <h3 className="typography-section-headline">Featured solutions</h3>
          <div className={styles.item}>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.text__item)}>
                <h4 className={clsx('typography-headline', styles.title__item)}>SEO</h4>
                <p className="typography-description smaller">
                  Attract more traffic to ultimately drive conversions or achieve other business
                  objectives.
                </p>
                <Button type="default" onClick={handleFormChange}>
                  Get Started
                </Button>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.image)}>
                <figure className={styles.seos}></figure>
                {/* <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                    right: '20%',
                  }}
                  src={'/static/img/services/seo.png'}
                  alt={'Image'}
                /> */}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.image)}>
                <figure className={styles.maintenance}></figure>
                {/* <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '60%',
                    height: 'auto',
                    position: 'absolute',
                    left: '40%',
                    // bottom: '0',
                  }}
                  src={'/static/img/services/maintenance-large.png'}
                  alt={'Image'}
                /> */}
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.text__item)}>
                <h4 className={clsx('typography-headline', styles.title__item)}>Maintenance</h4>
                <p className="typography-description smaller">
                  Ongoing process of management, monitoring and support to remain secure, up-to-date
                  and functioning optimally.
                </p>
                <Button type="default" onClick={handleFormChange}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featured}>
          <h3 className="typography-section-headline">Beyond Trimsy</h3>
          <div className={clsx(styles.item, styles.center)}>
            <div className={clsx(styles.wrapper)}>
              <div className={clsx(styles.column, styles.text__item)}>
                <h4 className={clsx(styles.title__item, styles.logo)}>
                  <figure className={styles.blog__logo}></figure>
                  {/* <Image
                    width="308"
                    height="117"
                    sizes="100vw"
                    style={{ width: '308px', height: '117px' }}
                    src={'/images/Tblog.png'}
                    alt="Trimsy Blog"
                    loading={'lazy'}
                    quality={'100'}
                  /> */}
                </h4>
                <p className={'typography-description bold smaller'}>
                  Read new releases, get updates and latest news.
                </p>
                <Button type="default" to="/blog">
                  Take a look
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.split}>
            <div className={clsx(styles.item, styles.split, styles.black)}>
              <div className={styles.wrapper}>
                <div className={clsx(styles.column, styles.text__item)}>
                  <h4 className={clsx('typography-headline', styles.title__item)}>
                    <div className={styles.img__item}>
                      <Image
                        width="60"
                        height="78"
                        sizes="100vw"
                        style={{
                          width: '60px',
                          height: '78px',
                          position: 'absolute',
                          top: '-60px',
                        }}
                        src={'/static/img/services/lock.png'}
                        alt="Lock Icon"
                        loading={'lazy'}
                        quality={'100'}
                      />
                    </div>
                    Trimsy x Privacy
                  </h4>
                  <p className="typography-description light small">
                    It’s one of our core values. Read about the measures we take to protect the
                    personal information.
                  </p>
                  <Button type="default--bold" to="/privacy-policy">
                    Find more
                  </Button>
                </div>
              </div>
            </div>
            <div className={clsx(styles.item, styles.split)}>
              <div className={styles.wrapper}>
                <div className={clsx(styles.column, styles.text__item)}>
                  <h4 className={clsx('typography-headline', styles.title__item, styles.logo)}>
                    <div className={styles.img__item}>
                      <Image
                        className={styles.feather}
                        width="139"
                        height="141"
                        sizes="100vw"
                        src={'/static/img/services/feather.png'}
                        alt="Feather"
                        loading={'lazy'}
                        quality={'100'}
                      />
                      <Image
                        className={styles.marketplace}
                        width="450"
                        height="78"
                        sizes="100vw"
                        src={'/images/TMarketplace-small.png'}
                        alt="Trimsy Blog"
                        loading={'lazy'}
                        quality={'100'}
                      />
                    </div>
                  </h4>
                  <p className={'typography-description bold small'}>
                    Social Media Management, Careers opportunities and more.
                  </p>
                  <Button type="default" to="/careers">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const items = [
    {
      data: {
        date: 'April 17, 2023',
        title:
          'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
        imgUrl: '/uploads/1556542894645.jpg',
      },
      modal:
        '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
      slug: '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
      type: 'QUICK READ',
    },
    {
      data: {
        date: 'March 14, 2023',
        title: 'Website Security: How to Protect Your Website and Gain a Competitive Edge',
        description:
          'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
        imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
        hashtags: ['Web', 'Dev', 'Security'],
      },
      slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
    },
    {
      data: {
        date: 'March 12, 2023',
        title: 'How To Create a Winning Social Media Strategy for Your Website',
        description:
          'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
        imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
        hashtags: ['Web', 'Social Media'],
      },
      slug: '/blog/how-to-create-a-winning-social-media-strategy',
    },
    {
      data: {
        date: 'March 9, 2023',
        title: 'Setting Up Google Analytics Fast and Easy',
        description:
          "Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.'",
        imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/setting-up-google-analytics-fast-and-easy',
    },
    {
      data: {
        date: 'March 2, 2023',
        title: 'How To Improve SEO of your Website in 5 Steps',
        description:
          'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
        imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
    },
  ];

  return {
    props: { items },
  };
}
