import Logo from 'components/Logo';
import Link from 'next/link';
import React from 'react';

import styles from './privacy-policy.module.scss';

PrivacyPolicyPage.title = 'Privacy Policy';
PrivacyPolicyPage.description = 'Trimsy Privacy Policy.';

export function PrivacyPolicyPage() {
  return (
    <>
      <h1 className={'hidden'}>Trimsy Privacy Policy</h1>
      <div className={styles.intro}>
        <div className={styles.wrapper}>
          <h2 className={styles.headline}>Privacy Policy</h2>
          <svg
            className={styles.key}
            width="91"
            height="118"
            viewBox="0 0 91 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.37658 43.8909H11.1556V35.5085C11.1556 25.7722 14.9843 16.9097 21.1541 10.4748C27.348 4.01112 35.9013 0 45.3159 0C54.7315 0 63.2838 4.01112 69.4796 10.4738C75.6485 16.9087 79.4771 25.7722 79.4771 35.5076V43.8899H82.2562C84.5619 43.8899 86.6572 44.831 88.1735 46.3482C89.6898 47.8655 90.6318 49.9599 90.6318 52.2655V109.623C90.6318 111.929 89.6908 114.024 88.1735 115.541C86.6562 117.057 84.5619 117.999 82.2562 117.999H8.37658C6.06997 117.999 3.97559 117.058 2.45833 115.541C0.941081 114.023 0 111.931 0 109.624V52.2665C0 49.9608 0.942041 47.8655 2.45833 46.3492C3.97559 44.8329 6.06997 43.8909 8.37658 43.8909ZM42.2526 83.834L38.229 94.377H52.4047L48.675 83.689C51.0421 82.4694 52.6602 80.0015 52.6602 77.1561C52.6602 73.1008 49.3712 69.8128 45.3169 69.8128C41.2616 69.8128 37.9726 73.1018 37.9726 77.1561C37.9716 80.1186 39.7261 82.672 42.2526 83.834ZM17.048 43.8909H73.5848V35.5085C73.5848 27.3355 70.3909 19.9173 65.2438 14.5493C60.1235 9.20819 53.0702 5.89328 45.3159 5.89328C37.5616 5.89328 30.5083 9.20819 25.3881 14.5483C20.2419 19.9163 17.047 27.3346 17.047 35.5076L17.048 43.8909ZM82.2562 49.7841H8.37658C7.69669 49.7841 7.07731 50.0645 6.62598 50.5159C6.17464 50.9672 5.89424 51.5875 5.89424 52.2665V109.624C5.89424 110.303 6.17464 110.924 6.62598 111.374C7.07731 111.826 7.69766 112.106 8.37658 112.106H82.2572C82.937 112.106 83.5574 111.826 84.0078 111.374C84.4591 110.923 84.7395 110.303 84.7395 109.624V52.2665C84.7395 51.5875 84.4591 50.9672 84.0078 50.5159C83.5555 50.0645 82.9361 49.7841 82.2562 49.7841Z"
              fill="white"
            />
          </svg>

          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h4>Privacy Policy</h4>
          <p>This Privacy Policy is effective from Jan 1, 2023.</p>
          <p> This Privacy Policy was updated on Feb 24, 2023.</p>
          <h4>Introduction</h4>
          <p>
            Welcome to trimsy.org. We, at Trimsy, have created a Privacy Policy that aims to help
            you understand what Data we collect, what we use it for and how you can exercise your
            rights. Reading Privacy Policy is important, so we hope you will give it time.
          </p>
          <p>
            {' '}
            Our Privacy Policy explains how we collect, safeguard and disclose information that
            results from your use of our Service.
          </p>
          <p> We use your data to provide and improve Service.</p>
          <p>
            {' '}
            By using Service, you agree to the collection and use of information in accordance with
            this policy. Unless otherwise defined in this Privacy Policy, the terms used in this
            Privacy Policy have the same meanings as in our Terms and Conditions.
          </p>
          <p>
            Our Terms and Conditions (“Terms”) govern all use of our Service and together with the
            Privacy Policy constitutes your agreement with us (“agreement”).
          </p>
          <h4>Information Collection and Use</h4>
          <p>
            {' '}
            We collect several types of information for various purposes to provide and improve our
            Service to you.
          </p>
          <h4>Types of Data Collected</h4>
          <h5>Personal Data</h5>
          <p>
            While using our Service, we may ask you to provide us with certain personally
            identifiable information that can be used to contact or identify you (“Personal Data”).
            Personally identifiable information may include, but is not limited to:
          </p>
          <br />
          <ul>
            <li>1. Email address</li>
            <li>2. First name and last name</li>
            <li>3. Phone number</li>
            <li>4. Cookies and Usage Data</li>
          </ul>
          <p>
            We may use your Personal Data to contact you with newsletters, marketing or promotional
            materials and other information that may be of interest to you. You may opt out of
            receiving any, or all, of these communications from us by following the unsubscribe link
            or by emailing at [how to contact]
          </p>
          <h5>Usage Data</h5>
          <p>
            We may also collect information that your browser sends whenever you visit our Service
            or when you access Service by or through a mobile device (“Usage Data”).
          </p>
          <p>Such information may include:</p>

          <ul>
            <li>Сomputer’s Internet Protocol address (e.g. IP address);</li>
            <li>Browser type;</li>
            <li>Browser version;</li>
            <li>Type of device you are using;</li>
            <li>The pages of our Service that you visit;</li>
            <li>The time and date of your visit;</li>
            <li>The time spent on those pages;</li>
            <li>Unique device identifiers;</li>
            <li>Other diagnostic data.</li>
          </ul>

          <p>
            We use cookies and similar tracking technologies to track the activity on our Service.
          </p>
          <p>
            {' '}
            Cookies are files with a small amount of data which may include an anonymous unique
            identifier. Cookies are sent to your browser from a website and stored on your device.
            Other tracking technologies are also used such as beacons, tags and scripts to collect
            and track information and to improve and analyze our Service.
          </p>
          <p>
            {' '}
            You can instruct your browser to refuse all cookies or to indicate when a cookie is
            being sent. However, if you do not accept cookies, you may not be able to use some
            portions of our Service.
          </p>
          <p> Examples of Cookies we use:</p>

          <p>Session Cookies: We use Session Cookies to operate our Service.</p>
          <p>
            Preference Cookies: We use Preference Cookies to remember your preferences and various
            settings.
          </p>
          <p>Security Cookies: We use Security Cookies for security purposes.</p>
          <p>
            Advertising Cookies: Advertising Cookies are used to serve you with advertisements that
            may be relevant to you and your interests.
          </p>

          <h4>Use of Data</h4>
          <p>
            Data protection law means that we can only use your data for certain reasons and where
            we have a legal basis to do so. Here are the reasons for which we process your data:
          </p>

          <h5>PROVIDING OUR SERVICES</h5>
          <p>We use some of your information to provide our services.</p>
          <p>Legal basis: contract, legitimate interests</p>
          <p>
            Testing features, interacting with feedback platforms and questionnaires, managing
            landing pages, heat mapping our site, traffic optimization and data analysis and
            research, including profiling and the use of machine learning and other techniques over
            your data and in some cases using third parties to do this.
          </p>

          <h5>Customer support</h5>
          <p>
            Testing features, interacting with feedback platforms and questionnaires, managing
            landing pages, heat mapping our site, traffic optimization and data analysis and
            research, including profiling and the use of machine learning and other techniques over
            your data and in some cases using third parties to do this.
          </p>
          <p>Legal basis: contract, legitimate interests</p>

          <h4>Analytics</h4>
          <p>
            We may use third-party Service Providers to monitor and analyze the use of our Service.
          </p>

          <p>
            Google Analytics is a web analytics service offered by Google that tracks and reports
            website traffic. Google uses the data collected to track and monitor the use of our
            Service. This data is shared with other Google services. Google may use the collected
            data to contextualize and personalize the ads of its own advertising network.
          </p>
          <p>
            {' '}
            For more information on the privacy practices of Google, please visit the Google Privacy
            Terms web page:{' '}
            <Link target={'_blank'} href="https://policies.google.com/privacy?hl=en">
              https://policies.google.com/privacy?hl=en
            </Link>
          </p>

          <h5>Behavioral Remarketing</h5>
          <p>
            We use remarketing services to advertise on third party websites to you after you
            visited our Service. We and our third-party vendors use cookies to inform, optimize and
            serve ads based on your past visits to our Service.
          </p>

          <h4>Contact Us</h4>
          <p>You may contact us regarding the Service or these Terms at:</p>
          <Link href="mailto:support@trimsy.org">{`support@trimsy.org`}</Link>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
