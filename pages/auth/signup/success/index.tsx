import React from 'react';
import { useRouter } from 'next/router';

import styles from '/styles/services/success.module.scss';
import { SwiperSmall } from 'components';

SuccessPage.title = 'Sign up: Successful';

export default function SuccessPage({ items }: any) {
  const router = useRouter();

  const [isClient, setIsClient] = React.useState(false);
  const [storedEmail, setStoredEmail] = React.useState('');

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isClient) {
      if (typeof window !== 'undefined' && router.isReady) {
        const { authToken } = router.query;
        const storedToken = localStorage.getItem('formSubmissionToken');

        if (authToken && authToken === storedToken) {
          setStoredEmail(localStorage.getItem('formSubmissionEmail') || '');

          // Clear the stored token and email from local storage
          localStorage.removeItem('formSubmissionToken');
          localStorage.removeItem('formSubmissionEmail');
        } else {
          router.push('/auth/signup');
        }
      }
    }
  }, [router, isClient]);
  return (
    <div>
      <section className={styles.success}>
        <div className={styles.info}>
          <h2 className={'typography-headline'}>You’re all set.</h2>
          <h4 className={'typography-hero-product'}>Account has been successfuly registered:</h4>
          <p className={'typography-hero-product bold'}>{storedEmail}</p>
        </div>
        {/* <div className={styles.order}>
          <h5 className={styles.title}>Your order:</h5>
          <svg
            width="146"
            height="106"
            viewBox="0 0 146 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M142.032 54.732H134.76V62.184H130.944V54.732H123.672V51.276H130.944V43.824H134.76V51.276H142.032V54.732Z"
              fill="black"
            />
            <g clipPath="url(#clip0_1761_1989)">
              <path
                d="M67.7637 106H40.2363V77.7227H67.7637V106ZM46.1162 100.111H61.9102V83.6381H46.0898L46.1162 100.111Z"
                fill="black"
              />
              <path
                d="M95.9502 89.474H12.0498C5.40527 89.474 0 84.036 0 77.3514V12.1226C0 5.43794 5.40527 0 12.0498 0H95.9502C102.595 0 108 5.43794 108 12.1226V77.3514C108 84.036 102.595 89.474 95.9502 89.474ZM12.0498 5.88889C8.62207 5.88889 5.85352 8.67417 5.85352 12.1226V77.3514C5.85352 80.7998 8.62207 83.5851 12.0498 83.5851H95.9502C99.3779 83.5851 102.146 80.7998 102.146 77.3514V12.1226C102.146 8.67417 99.3779 5.88889 95.9502 5.88889H12.0498Z"
                fill="black"
              />
              <path
                d="M86.0361 77.6962H21.9639C16.2949 77.6962 11.707 73.0806 11.707 67.3774V22.0967C11.707 16.3934 16.3213 11.7778 21.9639 11.7778H86.0098C91.6787 11.7778 96.2666 16.3934 96.2666 22.0967H90.4395C90.4395 19.6562 88.4619 17.6667 86.0361 17.6667H21.9639C19.5381 17.6667 17.5605 19.6562 17.5605 22.0967V67.3774C17.5605 69.8179 19.5381 71.8074 21.9639 71.8074H86.0098C88.4356 71.8074 90.4131 69.8179 90.4131 67.3774V42.0976H96.2666V67.3774C96.293 73.0806 91.7051 77.6962 86.0361 77.6962Z"
                fill="black"
              />
              <path
                d="M2.92676 63.584V77.3513C2.92676 82.4178 7.01367 86.5294 12.0498 86.5294H95.9502C100.986 86.5294 105.073 82.4178 105.073 77.3513V63.584H2.92676Z"
                fill="#C2B5FF"
              />
              <path
                d="M95.9502 89.474H12.0498C5.40527 89.474 0 84.036 0 77.3514V60.6396H108V77.3514C108 84.036 102.595 89.474 95.9502 89.474ZM5.85352 66.5285V77.3514C5.85352 80.7998 8.62207 83.5851 12.0498 83.5851H95.9502C99.3779 83.5851 102.146 80.7998 102.146 77.3514V66.5285H5.85352Z"
                fill="black"
              />
              <path
                d="M48.7266 72.1255H59.2471V78.0144H48.7266V72.1255ZM30.7441 100.111H77.2822V106H30.7441V100.111Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1761_1989">
                <rect width="108" height="106" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h4 className={'typography-headline'}>Web Advanced</h4>
        </div> */}
      </section>
      <SwiperSmall items={items} />
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
