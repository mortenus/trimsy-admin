import { Contribute, Intro, SupportItem } from 'features/StandsWithUkraine';
import React from 'react';

import styles from './standsWithUkraine.module.scss';

const linksArr = [
  {
    title: 'Come Back Alive',
    imgUrl: '/static/img/standsWithUkraine/comeBackAlive.jpg',
    href: 'https://savelife.in.ua/en/',
  },
  {
    title: 'United24',
    imgUrl: '/static/img/standsWithUkraine/united24.jpg',
    href: 'https://u24.gov.ua/',
  },
  {
    title: 'Serhiy Prytula Foundation',
    imgUrl: '/static/img/standsWithUkraine/prytula.jpg',
    href: 'https://prytulafoundation.org/en',
  },
  {
    title: 'Breathe Charity Foundation',
    imgUrl: '/static/img/standsWithUkraine/breathe.jpg',
    href: 'https://dyhai.org/en/',
  },
  {
    title: 'Razom Foundation',
    imgUrl: '/static/img/standsWithUkraine/razom.jpg',
    href: 'https://www.razomforukraine.org/',
  },
  {
    title: 'ArmySOS',
    imgUrl: '/static/img/standsWithUkraine/armysos.jpg',
    href: 'https://armysos.com.ua/',
  },
];

StandsWithUkraine.title = 'Trimsy stands with Ukraine';
StandsWithUkraine.description =
  "We, at Trimsy, condemn the war in Ukraine. Let's support the people of Ukraine, any way we can. Join us in helping those in need.";

export default function StandsWithUkraine() {
  return (
    <>
      <h1 className={'hidden'}>Trimsy stands with Ukraine</h1>
      <Intro />
      <Contribute />

      <div className={styles.items}>
        {linksArr.map((item, index) => (
          <SupportItem key={index} {...item} />
        ))}
      </div>
    </>
  );
}
