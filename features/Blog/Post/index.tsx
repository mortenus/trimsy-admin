import Image from 'next/image';
import React from 'react';

import styles from './Post.module.scss';

Post.title = 'Test';

const test = {
  title: 'How to get more client to get to your business',
  headerImg: '/static/img/blog/test/header.jpg',
  date: 'Apr 26, 2022',
  minToRead: 2,
};

export default function Post() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>{test.title}</h2>
        <div className={styles.headerImg}>
          <Image fill src={test.headerImg} alt={'Header IMG'} />
        </div>

        <div className={styles.date}>
          <span>{test.date}</span>
          <div className={styles.line} />
          <span>{test.minToRead} mins read</span>
        </div>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim vel
        </p>

        <section>
          <h4>WHAT IS SADSA SD A</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim vel
          </p>
          <div className={styles.img}>
            <Image fill src={'/static/img/blog/test/dsa.jpg'} alt={'DSA Image'} />
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velAmet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velAmet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim vel
          </p>
        </section>

        <div className={styles.author}>
          <div className={styles.img}>
            <Image fill src={'/static/img/blog/test/author.jpg'} alt={'Author image'} />
          </div>
          <div className={styles.info}>
            <span>Written by</span>
            <h5 className={styles.name}>Oleksii Pylypenko</h5>
            <span className={styles.position}>CEO</span>
            <p className={styles.description}>
              I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my expertise
              in engineering, management, traffic marketing, and analytics working for large game
              development studios with a $1M+ monthly income. With a clear vision of how game
              development should work, I run Whimsy Games, being responsible for the marketing and
              sales of our products and services.
            </p>
          </div>
        </div>

        <div className={styles.further}>
          <h3>Next to Read</h3>

          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/test/1.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h5>How to get more client to get to your business</h5>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/test/2.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h5>How to get more client to get to your business</h5>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/test/3.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h5>How to get more client to get to your business</h5>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
