import React from 'react';

import styles from '/styles/services/services.module.scss';
import { CompareTable, ContactForm } from 'features/Services';
import { FAQ } from 'features/Development';
import Banner from 'features/Services/Banner';

const init = {
  isNew: false,
  name: 'Basic',
  productType: '',
  price: 2500,
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

Basic.title = init.name;

export default function Basic() {
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
              width="108"
              height="106"
              viewBox="0 0 108 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1741_283)">
                <path
                  d="M67.7637 106H40.2363V77.7227H67.7637V106ZM46.1162 100.111H61.9102V83.6381H46.0898L46.1162 100.111Z"
                  fill="black"
                />
                <path
                  d="M95.9502 89.474H12.0498C5.40527 89.474 0 84.036 0 77.3513V12.1226C0 5.43794 5.40527 0 12.0498 0H95.9502C102.595 0 108 5.43794 108 12.1226V77.3513C108 84.036 102.595 89.474 95.9502 89.474ZM12.0498 5.88889C8.62207 5.88889 5.85352 8.67417 5.85352 12.1226V77.3513C5.85352 80.7998 8.62207 83.5851 12.0498 83.5851H95.9502C99.3779 83.5851 102.146 80.7998 102.146 77.3513V12.1226C102.146 8.67417 99.3779 5.88889 95.9502 5.88889H12.0498Z"
                  fill="black"
                />
                <path
                  d="M86.0361 77.6963H21.9639C16.2949 77.6963 11.707 73.0806 11.707 67.3774V22.0967C11.707 16.3934 16.3213 11.7778 21.9639 11.7778H86.0098C91.6787 11.7778 96.2666 16.3934 96.2666 22.0967H90.4395C90.4395 19.6562 88.4619 17.6667 86.0361 17.6667H21.9639C19.5381 17.6667 17.5605 19.6562 17.5605 22.0967V67.3774C17.5605 69.8179 19.5381 71.8074 21.9639 71.8074H86.0098C88.4356 71.8074 90.4131 69.8179 90.4131 67.3774V42.0977H96.2666V67.3774C96.293 73.0806 91.7051 77.6963 86.0361 77.6963Z"
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
                <clipPath id="clip0_1741_283">
                  <rect width="108" height="106" fill="white" />
                </clipPath>
              </defs>
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
