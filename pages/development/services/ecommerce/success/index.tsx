import React from 'react';
import { useRouter } from 'next/router';

import styles from '/styles/services/success.module.scss';
import { SwiperSmall } from 'components';

SuccessPage.title = 'Thank You: Order Confirmation';

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
          router.push('/development/services');
        }
      }
    }
  }, [router, isClient]);

  return (
    <div>
      <section className={styles.success}>
        <div className={styles.info}>
          <h2 className={'typography-headline'}>You’re all set.</h2>
          <h4 className={'typography-hero-product'}>We’ll get in touch within 24 hours with:</h4>
          <p className={'typography-hero-product bold'}>{storedEmail}</p>
        </div>
        <div className={styles.order}>
          <h5 className={styles.title}>Your order:</h5>
          <svg
            width="144"
            height="142"
            viewBox="0 0 144 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M43.3091 107H122.717L130 64H36L43.3091 107Z" fill="#C2B5FF" />
            <path
              d="M134.107 38.2463C133.394 37.4149 132.337 36.9259 131.23 36.9259H113.895C111.83 36.877 110.109 38.4909 110.059 40.5449C110.01 42.5989 111.633 44.3106 113.699 44.3595H126.78L123.731 61.4762H41.4824L38.4334 44.3595H93.2164C95.2818 44.4084 97.003 42.7945 97.0522 40.7405C97.1014 38.6865 95.4785 36.9748 93.4131 36.9259H37.0073L32.2863 12.0332C31.9667 10.2726 30.4176 9.00108 28.6226 9.00108H12.8369C10.7715 8.95218 9.05027 10.566 9.00109 12.6201C8.95191 14.6741 10.5747 16.3858 12.6402 16.4347H25.4999L41.507 104.513C41.8266 106.298 43.3757 107.594 45.1952 107.594H61.6449C66.6117 107.594 70.6196 111.604 70.6196 116.519C70.6196 121.458 66.5871 125.444 61.6449 125.444C56.7026 125.444 52.6701 121.434 52.6701 116.519C52.6209 114.465 50.8997 112.851 48.8343 112.9C46.8427 112.949 45.2444 114.538 45.1952 116.519C45.1706 125.566 52.498 132.927 61.5957 132.975C70.6934 133 78.0945 125.713 78.1437 116.666C78.1683 113.438 77.2093 110.308 75.439 107.618H103.666C108.633 107.618 112.641 111.628 112.641 116.543C112.641 121.458 108.609 125.469 103.666 125.469C98.7242 125.469 94.6917 121.458 94.6917 116.543C94.6425 114.489 92.9213 112.875 90.8559 112.924C88.8642 112.973 87.266 114.563 87.2168 116.543C87.1922 125.591 94.5196 132.951 103.617 133C112.715 133.024 120.116 125.738 120.165 116.69C120.19 113.462 119.231 110.332 117.461 107.643H120.018C121.837 107.643 123.386 106.347 123.706 104.562L130.591 65.8777L134.943 41.2784C135.14 40.2025 134.82 39.0777 134.107 38.2463ZM116.895 100.16H48.3425L42.8102 68.9098H122.452L116.895 100.16Z"
              fill="black"
            />
          </svg>
          <h4 className={'typography-headline'}>Web eCommerce</h4>
        </div>
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
