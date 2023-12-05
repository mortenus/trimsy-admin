import {
  Accomplish,
  Boost,
  ContactUs,
  FAQ,
  Here,
  Influence,
  Intro,
  Testimonials,
} from 'features/Development';

import { useOnScroll } from 'hooks/useOnScroll';
import Head from 'next/head';

type TDevelopment = {
  handleFormChange: () => void;
  handleKeyDownOverflowChange: (e: any) => void;
};

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

Development.title = 'Development';

export default function Development({
  handleFormChange,
  handleKeyDownOverflowChange,
}: TDevelopment) {
  const { onScrollEvent } = useOnScroll();

  return (
    <>
      <main>
        <Intro />

        <Influence />

        <Testimonials />

        <Boost onScrollEvent={onScrollEvent} />

        {/* <Product /> */}

        {/* <Accomplish onScrollEvent={onScrollEvent} /> */}

        <Here
          handleFormChange={handleFormChange}
          handleKeyDownOverflowChange={handleKeyDownOverflowChange}
        />

        <FAQ arr={FAQArr} />

        {/* <ContactForm /> */}
        <ContactUs onScrollEvent={onScrollEvent} />
      </main>

      <Head>
        <meta content={'https://trimsy.org/images/mini-logo.png'} property="og:image" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQSchema) }}
        />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
        />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
      </Head>
    </>
  );
}

const WebSiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://trimsy.org/#website',
      url: 'https://trimsy.org/',
      name: 'Trimsy',
      description: 'Discover your presence in Web the way you want.',
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://trimsy.org/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'en-US',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://trimsy.org/#primaryimage',
      inLanguage: 'en-US',
      url: 'https://trimsy.org/images/mini-logo.png',
      contentUrl: 'https://trimsy.org/images/mini-logo.png',
      width: 500,
      height: 500,
      caption: 'Trimsy',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://trimsy.org/#webpage',
      url: 'https://trimsy.org/',
      name: 'Web Development | Trimsy',
      isPartOf: { '@id': 'https://trimsy.org/#website' },
      primaryImageOfPage: { '@id': 'https://trimsy.org/images/logo.svg' },
      description:
        'Web Studio \u2705 Discover your presence in Web the way you want. \u261b One of the top growing development company in the industry.',
      breadcrumb: { '@id': 'https://trimsy.org/#breadcrumb' },
      inLanguage: 'en-US',
      potentialAction: [{ '@type': 'ReadAction', target: ['https://trimsy.org/'] }],
    },
    // {
    //   '@type': 'BreadcrumbList',
    //   '@id': 'https://trimsy.org/#breadcrumb',
    //   itemListElement: [
    //     { '@type': 'ListItem', position: 1, name: 'About us', item: 'https://trimsy.org/about' },
    //     { '@type': 'ListItem', position: 2, name: 'Carrers', item: 'https://trimsy.org/careers' },
    //     { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://trimsy.org/blog' },
    //   ],
    // },
  ],
};

const OrganizationSchema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Trimsy',
  url: 'https://trimsy.org/',
  logo: 'https://trimsy.org/images/mini-logo.png',
  description: 'Trimsy is a web development studio that builds outstanding apps.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tanner Close',
    addressLocality: 'Airdrie',
    postalCode: 'T4A 2L4',
    addressCountry: 'Canada',
  },
  contactPoint: { '@type': 'ContactPoint', telephone: '+1 (530) 908-4279' },
};

const FAQSchemaArr = FAQArr.map((item) => ({
  '@type': 'Question',
  name: item.title,
  acceptedAnswer: {
    '@type': 'Answer',
    text: `<p>${item.description}</p>`,
  },
}));

const FAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQSchemaArr,
};

//https://neilpatel.com/blog/get-started-using-schema/
// const d = {
//   '@context': 'https://schema.org',
//   '@type': 'FAQPage',
//   mainEntity: [
//     {
//       '@type': 'Question',
//       name: 'What is the game design document?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "A game design document is an all-in-one file with different information about your game. It contains a description of the concepts, ideas, aesthetics, mechanics, characters, plot, features, etc. No worries, we explain to you every symbol, so you're aware of your game everything like a pro.",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What the difference between game design and development?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: 'All is simple. Game development is about software and game design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized game with thousands of downloads.',
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'Which game engine are you using and why?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "Our team has practical experience in applying multiple game engines. We select them based on the game requirements to ensure gameplay is flawless and smooth. Unity 3D engine is one of the most tried and tested game engines which is used by our team the most often due to the perks this software provides. Want to know more? Let's discuss your game requirements and opt for the best engine for the game.",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What are the models used to make money in gaming business?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: 'While we produce games for users to enjoy gameplay, the same games can be a great way of income. Gaming business allows you to monetize with the models including Charge Per Copy, monthly subscription, microtransactions, pay-per-play, ad-based, provider billing, merchandising, code licensing, and sponsorship.',
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What is an SDK in advertising?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: 'SDK stands for a software development kit. It is a piece of code that allows mobile apps to connect to third-party services and technologies. By integrating SDK into our products, we can monitor game performance, user engagement, and retention. This information enables our team to update some features and provide a better, improved product.',
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What Technlogoies do you use whilst developing an Application?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "Website could be developed in so many ways, without using many technlogoies to most modern Libraries and Frameworks. We select them based on the application requirements to boost and make your web page look the way you want it any way possible. Our team has practical experience in applying most popular libraries while developing. ReactJS under NextJS is mostly focused upon due to its high reliance and popularity. While Backend or 'server-side' is focused on pure NodeJS (or NestJS) to ensure fast and secure exchange between the sides.",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What the difference between web design and development?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "Web Developemnt is about software and web design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized web application with several thousands of views",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What is Domain and VPS?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "It is simplier than you think. To host your application, you would need to use Virtual Private Server, it is simply a private computer that runs your application. Domain is the link in the browser to direct user to that computer so they could experience the app in the browser. We provide such service, to get more details get in contact with us",
//       },
//     },
//   ],
// };

// const structuredData = {
//   '@context': 'http://schema.org/',
//   '@type': 'Product',
//   name: ['Regular Backpack Billboard', 'Walking Billboards', 'Human Billboards'],
//   image: [
//     'https://backpackbillboards.com/wp-content/uploads/2017/12/backpack-billboards-1x1.jpg',
//     'https://backpackbillboards.com/wp-content/uploads/2017/12/backpack-billboards-4x3.jpg',
//     'https://backpackbillboards.com/wp-content/uploads/2017/12/backpack-billboards-16x9.jpg',
//   ],
//   description:
//     'Backpack Billboards feature a rechargeable battery which powers the internal LED lights providing a bright illuminated display for up to 8 hours.',
//   sku: 'BPBB8',
//   brand: {
//     '@type': 'Thing',
//     name: ['Regular Backpack Billboard', 'Walking Billboards', 'Human Billboards'],
//   },
//   offers: {
//     '@type': 'Offer',
//     priceCurrency: 'USD',
//     price: '299.00',
//     priceValidUntil: '2020-11-11',
//     itemCondition: 'http://schema.org/NewCondition',
//     availability: 'http://schema.org/InStock',
//     seller: {
//       '@type': 'Organization',
//       name: ['Backpack Billboards', 'Human Billboards', 'Walking Billboards'],
//     },
//   },
// };
