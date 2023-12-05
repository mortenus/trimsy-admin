import React from 'react';

import styles from '/styles/services/services.module.scss';
import { CompareTable, ContactForm } from 'features/Services';
import { FAQ } from 'features/Development';
import Banner from 'features/Services/Banner';

const init = {
  isNew: false,
  name: 'Custom',
  productType: '',
  price: 9999,
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

Custom.title = init.name;

export default function Custom() {
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
              width="132"
              height="103"
              viewBox="0 0 132 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1741_316)">
                <path
                  d="M82.0811 101.901C68.836 101.934 56.1387 96.6656 46.7608 87.2608L40.7344 81.2172C34.5469 74.9797 34.6114 64.8639 40.8311 58.691C47.0186 52.5504 57.0089 52.5504 63.1964 58.691C63.6475 59.1435 64.3565 59.1435 64.8077 58.691C65.2589 58.2385 65.2589 57.5275 64.8077 57.0751L46.7608 38.9765C40.5733 32.739 40.5733 22.6879 46.7608 16.4503C66.5157 -2.84398 98.13 -2.39151 117.369 17.4199C136.222 36.8758 136.222 67.8372 117.369 87.2608C108.024 96.6656 95.3262 101.966 82.0811 101.901ZM51.9815 61.3088C47.212 61.3088 43.377 65.1871 43.377 69.938C43.377 72.2326 44.2794 74.4303 45.8907 76.0462L51.9171 82.0898C68.5782 98.7986 95.584 98.7986 112.245 82.0898C128.906 65.381 128.906 38.2979 112.245 21.589C95.584 4.88022 68.5782 4.88022 51.9493 21.589C48.5977 24.9502 48.5977 30.4121 51.9493 33.8055L69.9962 51.9041C73.2188 55.2652 73.1221 60.5978 69.7706 63.8297C66.5157 66.9646 61.3594 66.9646 58.1046 63.8297C56.461 62.2138 54.2696 61.3088 51.9815 61.3088Z"
                  fill="black"
                />
                <path
                  d="M99.8701 69.5501C96.7764 66.4475 91.7812 66.4475 88.7197 69.5501C85.626 72.6527 85.626 77.6621 88.7197 80.7324C91.8135 83.835 96.8086 83.835 99.8701 80.7324C102.964 77.6621 102.964 72.6527 99.8701 69.5501Z"
                  fill="black"
                />
                <path
                  d="M94.2949 86.7115C87.9141 86.7115 82.7578 81.5405 82.7578 75.1414C82.7578 68.7423 87.9141 63.5713 94.2949 63.5713C100.676 63.5713 105.832 68.7423 105.832 75.1414C105.832 78.2117 104.607 81.1527 102.448 83.3181C100.289 85.5157 97.3565 86.7115 94.2949 86.7115ZM94.2949 70.8753C91.9424 70.8753 90.041 72.7821 90.041 75.1414C90.041 77.5007 91.9424 79.4075 94.2949 79.4075C96.6475 79.4075 98.5488 77.5007 98.5488 75.1414C98.5488 74.0103 98.0977 72.9114 97.292 72.1358C96.4863 71.3278 95.4229 70.8753 94.2949 70.8753Z"
                  fill="black"
                />
                <path
                  d="M84.853 17.9371C80.6313 16.8059 76.313 19.3268 75.185 23.5282C74.0571 27.762 76.5386 32.0927 80.7602 33.2239C84.9819 34.355 89.3003 31.8665 90.4282 27.6327C91.5884 23.4313 89.0747 19.0683 84.853 17.9371Z"
                  fill="black"
                />
                <path
                  d="M82.8223 37.1665C76.4414 37.1665 71.2852 31.9955 71.2852 25.6287C71.2852 19.2296 76.4414 14.0586 82.79 14.0586C89.1387 14.0586 94.3272 19.2296 94.3272 25.5964C94.3272 29.7332 92.1357 33.5468 88.5586 35.6152C86.8184 36.6171 84.8525 37.1665 82.8223 37.1665ZM82.79 21.3303C82.0488 21.3303 81.3076 21.5242 80.6631 21.9121C79.6963 22.4615 78.9551 23.3987 78.6973 24.4976C78.085 26.7599 79.4385 29.1192 81.6943 29.7332C83.9824 30.3149 86.3027 28.9252 86.8828 26.6629C87.4629 24.4006 86.1416 22.1383 83.918 21.4919C83.5635 21.3626 83.1768 21.3303 82.79 21.3303Z"
                  fill="black"
                />
                <path
                  d="M111.375 39.2674C108.281 36.1648 103.286 36.1648 100.224 39.2674C97.1627 42.37 97.1305 47.3794 100.224 50.4497C103.318 53.5523 108.313 53.5523 111.375 50.4497C113.373 48.4459 114.146 45.5372 113.437 42.8225C113.05 41.4974 112.341 40.2693 111.375 39.2674Z"
                  fill="black"
                />
                <path
                  d="M105.799 56.4287C100.579 56.4287 96.0025 52.906 94.649 47.8643C93.0055 41.6914 96.6793 35.3569 102.835 33.7086C103.801 33.4501 104.8 33.3208 105.799 33.3208C112.18 33.3208 117.337 38.4918 117.337 44.8586C117.337 50.0943 113.824 54.6835 108.764 56.0409C107.797 56.2995 106.798 56.4611 105.799 56.4287ZM105.767 40.5925C105.413 40.5925 105.026 40.6248 104.671 40.7218C102.416 41.3359 101.062 43.6628 101.674 45.9574C102.158 47.8319 103.866 49.1247 105.799 49.1247C106.154 49.1247 106.541 49.0601 106.895 48.9954C109.151 48.3814 110.504 46.0544 109.892 43.7598C109.699 43.0488 109.312 42.3701 108.796 41.853C107.991 41.045 106.895 40.5925 105.767 40.5925Z"
                  fill="black"
                />
                <path
                  d="M31.7432 24.4652C31.7432 13.3475 17.6924 4.33057 17.6924 4.33057C17.6924 4.33057 3.6416 13.3475 3.6416 24.4652C3.6416 30.735 5.63965 36.3262 8.76562 40.0105C10.5059 42.0789 12.6006 43.5333 14.8887 44.212C15.8232 44.4705 16.7578 44.6321 17.7246 44.6321C17.8857 44.6321 18.0791 44.6321 18.2402 44.5998C25.749 44.212 31.7754 35.3566 31.7432 24.4652Z"
                  fill="#C2B5FF"
                />
                <path
                  d="M35.3848 24.4653C35.3848 11.5055 20.3027 1.68058 19.6582 1.26043L17.6924 0L15.7266 1.26043C15.082 1.68058 0 11.5055 0 24.4653C0 31.3492 2.19141 37.8776 5.96191 42.3699C6.54199 43.0486 7.1543 43.6627 7.7666 44.2444H6.57422V51.5485H7.95996V93.7245C7.95996 98.8309 12.1172 103 17.209 103H18.208C23.2998 103 27.457 98.8632 27.4893 93.7245V51.5485H28.8428V44.2444H27.5537C32.291 39.9783 35.3848 32.7066 35.3848 24.4653ZM17.6924 8.79071C21.7529 11.958 28.1016 18.1955 28.1016 24.4653C28.1016 33.256 23.5898 40.657 18.0146 40.9479C17.3057 40.9802 16.5645 40.8833 15.8877 40.6894C14.3408 40.2369 12.8262 39.2027 11.5371 37.6514C8.83008 34.4518 7.2832 29.6363 7.2832 24.4653C7.2832 18.1632 13.6318 11.9256 17.6924 8.79071ZM20.1738 93.7245C20.1416 94.791 19.2715 95.696 18.1758 95.696H17.1768C16.1133 95.696 15.2109 94.8233 15.2109 93.7245V51.904H20.1738V93.7245Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1741_316">
                  <rect width="132" height="103" fill="white" />
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
