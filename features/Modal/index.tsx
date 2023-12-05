import clsx from 'clsx';
import React from 'react';

import styles from './Modal.module.scss';
import PostStyles from '/styles/blog/Post.module.scss';
import BlogWrapperStyles from '/styles/blog/BlogWrapper.module.scss';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';
import Image from 'next/image';

type TAuthor = {
  fullname: string;
  position: string;
  description: string;
  avatarUrl: string;
  profileUrl: string;
};

type TModal = {
  opened: boolean;
  setIsOpened: () => void;
  children: React.ReactNode;
  customRef?: any;
  info: {
    title: string;
    headerImg: string;
    date: string;
    createdAt: string;
    modifiedAt: string;
    minToRead: number;
    slug: string;
    description: string;
    author: TAuthor;
  };
};

const Modal = ({ opened, setIsOpened, children, info, customRef }: TModal) => {
  useHideScrollOnTrue(opened);

  //   const {
  //     handleStateChange: handleOpenChange,
  //     handleKeyDown,
  //     state: open,
  //   } = useChangeStateOnSpace();

  //   const ref = React.useRef(null);
  //   const toNotCloseRef = React.useRef(null);

  //   useHideOnOutsideClick(opened, setIsOpened, ref, toNotCloseRef);

  return (
    <div className={clsx(styles.overflow, { [styles.overlayVisible]: opened })}>
      <div className="global-blog-wrapper" ref={customRef}>
        <div className={styles.content}>
          <svg
            className={styles.close}
            onClick={setIsOpened}
            //   onKeyDown={handleKeyDownOverflowChange}
            tabIndex={1}
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.5 35L0 31.5L14 17.5L0 3.5L3.5 0L17.5 14L31.5 0L35 3.5L21 17.5L35 31.5L31.5 35L17.5 21L3.5 35Z"
              fill="black"
            />
          </svg>
          <article className={BlogWrapperStyles.wrapper}>
            <div
              className={BlogWrapperStyles.headerImg}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={info.headerImg}
                width="300"
                height="300"
                //   sizes="100vw"
                loading="lazy"
                style={{
                  //   width: 'auto',
                  //   height: '100%',
                  overflow: 'hidden',
                  borderRadius: '35px',
                }}
                alt={'Header Blog Image'}
              />
            </div>
            <h2 className={BlogWrapperStyles.title}>{info.title}</h2>

            <div className={BlogWrapperStyles.date}>
              <span>{info.date}</span>
              <div className={BlogWrapperStyles.line} />
              <span>{info.minToRead} mins read</span>
            </div>
            <section className={PostStyles.section}>{children}</section>
            <div className={'global-wrapper'}>
              {/* <div className={BlogWrapperStyles.author}>
                <div className={BlogWrapperStyles.img}>
                  <Image fill src={info.author.avatarUrl} alt={'Author image'} />
                </div>
                <div className={BlogWrapperStyles.info}>
                  <span>Written by</span>
                  <h4 className={BlogWrapperStyles.name}>{info.author.fullname}</h4>
                  <span className={BlogWrapperStyles.position}>{info.author.position}</span>
                  <p className={BlogWrapperStyles.description}>{info.author.description}</p>
                </div>
              </div> */}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Modal;
