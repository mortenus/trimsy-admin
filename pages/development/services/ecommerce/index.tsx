import React from 'react';

import styles from '/styles/services/services.module.scss';
import { CompareTable, ContactForm } from 'features/Services';
import { FAQ } from 'features/Development';
import Banner from 'features/Services/Banner';

const init = {
  isNew: false,
  name: 'eCommerce',
  productType: '',
  price: 7000,
  logo: '',
};

init.productType = init.name.toLowerCase();

const FAQArr = [
  {
    title: 'What the difference between web design and development?',
    description: `Web Development is about software and web design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized web application with several thousands of views.`,
  },
  {
    title: 'What is SEO?',
    description: `SEO, or Search Engine Optimization, is the art and science of optimizing a website to rank higher on search engine results pages. It involves various techniques such as keyword research, content optimization, and link building to increase a website's visibility and attract more organic traffic.`,
    learnMoreUrl: 'https://trimsy.org/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
  {
    title: `How can analytics be used to improve a website's performance?`,
    description: `Analytics can be used to improve a website's performance by providing valuable insights into user behavior and preferences. By analyzing data on website traffic, page views, bounce rates, conversion rates, and other metrics, website owners can make data-driven decisions to improve the user experience, optimize website design and content, identify areas for improvement, and ultimately increase engagement and conversion.`,
    learnMoreUrl: 'https://trimsy.org/blog/setting-up-google-analytics-fast-and-easy',
  },
  {
    title: 'What Technlogoies do you use whilst developing an Application?',
    description: `Website could be developed in so many ways, without using many technologies to most modern Libraries and Frameworks. We select them based on the application requirements to boost and make your web page look the way you want it any way possible. Our team has practical experience in applying most popular libraries while developing. ReactJS under NextJS is mostly focused upon due to its high reliance and popularity. While Backend or 'server-side' is focused on pure NodeJS (or NestJS) to ensure fast and secure exchange between the sides.`,
  },
  {
    title: 'What is Domain and VPS?',
    description: `It is simple, to host your application, you would need to use Virtual Private Server, it is simply a private computer that runs your application. Domain is the link in the browser to direct user to that computer so they could experience the app in the browser. We provide such service, to get more details get in contact with us.`,
  },
  {
    title: 'What is website security and what measures can be taken to ensure a website is secure?',
    description: `Website security refers to the protection of a website from unauthorized access, use, modification, or destruction. It involves implementing measures to prevent cyberattacks and ensure the confidentiality, integrity, and availability of the website and its data. To ensure a website is secure, measures such as using strong passwords, keeping software up to date, using HTTPS encryption, implementing firewalls, conducting regular backups, and using security plugins can be taken.`,
    learnMoreUrl:
      'https://trimsy.org/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
  },
];

eCommerce.title = init.name;

export default function eCommerce({}) {
  return (
    <div className={styles.wrapper}>
      {/* <Banner /> */}
      <div className={styles['info--wrapper']}>
        <div className={styles.info}>
          <div className={styles.text}>
            {init.isNew && <span className={styles.new}>New</span>}
            <h1 className={styles.product}>Web {init.name}</h1>
            <span className={styles.pricing}>From ${init.price}</span>
          </div>
          <div className={styles.icon}>
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
          </div>
        </div>
      </div>

      <ContactForm productType={init.productType} />

      <CompareTable currentActive={init.name} nameClickable={true} />
      <FAQ arr={FAQArr} />
    </div>
  );
}
