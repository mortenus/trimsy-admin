import React from 'react';

import styles from '/styles/services/services.module.scss';
import { CompareTable, ContactForm } from 'features/Services';
import { FAQ } from 'features/Development';
import Banner from 'features/Services/Banner';

const init = {
  isNew: false,
  name: 'Starter',
  productType: '',
  price: 999,
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

Starter.title = init.name;

export default function Starter() {
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
              width="100"
              height="75"
              viewBox="0 0 126 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1741_276)">
                <path
                  d="M114.237 109H11.7387C5.26641 109 0 103.732 0 97.2581V11.7419C0 5.26784 5.26641 0 11.7387 0H114.237C120.734 0 126 5.26784 126 11.7419C126 13.6127 124.474 15.1389 122.604 15.1635C120.734 15.1635 119.208 13.6373 119.183 11.7665C119.183 9.0341 116.968 6.84327 114.237 6.81865H11.7387C9.00703 6.81865 6.8168 9.0341 6.79219 11.7665V97.2581C6.79219 99.9905 9.00703 102.206 11.7387 102.206H114.237C116.968 102.206 119.183 99.9905 119.183 97.2581V51.5461C119.183 49.6752 120.709 48.1491 122.579 48.1244C124.45 48.1244 125.975 49.6506 126 51.5215V97.2335C126 103.732 120.734 109 114.237 109Z"
                  fill="black"
                />
                <path
                  d="M3.39648 11.7418V28.9485H122.58V11.7418C122.58 7.13862 118.839 3.39697 114.237 3.39697H11.7391C7.13711 3.39697 3.39648 7.13862 3.39648 11.7418Z"
                  fill="#C2B5FF"
                />
                <path
                  d="M122.604 32.3701H3.39609C1.52578 32.3701 0 30.8439 0 28.9731V11.7419C0 5.26784 5.26641 0 11.7387 0H114.237C120.734 0 126 5.26784 126 11.7419V28.9485C126 30.8439 124.474 32.3701 122.604 32.3701ZM6.8168 25.5515H119.183V11.7665C119.183 9.0341 116.968 6.81865 114.237 6.81865H11.7633C9.03164 6.81865 6.84141 9.0341 6.8168 11.7419V25.5515Z"
                  fill="black"
                />
                <path
                  d="M72.5236 19.5943H66.0514C64.1811 19.5943 62.6553 18.0681 62.6553 16.1973C62.6553 14.3265 64.1811 12.8003 66.0514 12.8003H72.5236C74.3939 12.8003 75.9197 14.3265 75.9197 16.1973C75.9443 18.0681 74.4186 19.5943 72.5236 19.5943ZM90.5869 19.5943H84.1146C82.2443 19.5943 80.7186 18.0681 80.7186 16.1973C80.7186 14.3265 82.2443 12.8003 84.1146 12.8003H90.5869C92.4572 12.8003 93.983 14.3265 93.983 16.1973C93.983 18.0681 92.4572 19.5943 90.5869 19.5943ZM108.626 19.5943H102.153C100.283 19.5943 98.7572 18.0681 98.7572 16.1973C98.7572 14.3265 100.283 12.8003 102.153 12.8003H108.626C110.496 12.8003 112.022 14.3265 112.022 16.1973C112.046 18.0681 110.521 19.5943 108.626 19.5943Z"
                  fill="black"
                />
                <path d="M27.7598 66.0942H98.241V81.7501H27.7598V66.0942Z" fill="#C2B5FF" />
                <path
                  d="M98.2406 85.1471H27.7594C25.8891 85.1471 24.3633 83.6209 24.3633 81.7501V66.0697C24.3633 64.1989 25.8891 62.6727 27.7594 62.6727H98.2406C100.111 62.6727 101.637 64.1989 101.637 66.0697V81.7501C101.661 83.6209 100.136 85.1471 98.2406 85.1471ZM31.1555 78.3531H94.8445V69.4913H31.1555V78.3531ZM87.9785 54.8448H38.0215C36.1512 54.894 34.5762 53.417 34.527 51.5216C34.4777 49.6261 35.9543 48.0753 37.8492 48.0261H88.0031C89.8734 47.9769 91.4484 49.4538 91.4977 51.3493C91.5469 53.2447 90.0703 54.7955 88.1754 54.8448H87.9785Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1741_276">
                  <rect width="126" height="109" fill="white" />
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
