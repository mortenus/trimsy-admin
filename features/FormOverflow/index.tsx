import clsx from 'clsx';
import ContactFormOverflowContainer from './components/ContactFormOverflow';
import React from 'react';

import styles from './FormOverflow.module.scss';

import TFormOverflow from './FormOverflow.types';
import Link from 'next/link';

const FormOverflow = React.memo(function FormOverflow({
  open,
  handleOpen,
  handleKeyDownOverflowChange,
}: TFormOverflow) {
  //   const overflowRef = React.useRef(null);
  //   const [event, setEvent] = React.useState<null | MouseEvent>(null);

  //   const checkChangeFormVisibility = (event: MouseEvent) => {
  //     const path = event.composedPath();
  //     if (overflowRef.current === null) return;
  //     if (!path.includes(overflowRef.current)) {
  //       console.log(event.composedPath());
  //       console.log(overflowRef.current);
  //       //   handleOpen();
  //     }
  //   };

  //   React.useEffect(() => {
  //     if (open && event !== null) checkChangeFormVisibility(event);

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [event]);

  //   const handleOutsideClick = (e: MouseEvent) => setEvent(e);

  //   React.useEffect(() => {
  //     document.body.addEventListener('click', handleOutsideClick);

  //     return () => document.body.removeEventListener('click', handleOutsideClick);

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div className={clsx(styles.overflow, { [styles.overlayVisible]: open })}>
      <div className={styles.form}>
        <div className={styles.leftSide}>
          <svg
            className={styles.formSvg}
            width="141"
            height="141"
            viewBox="0 0 141 141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M117.5 53.7144V33.5715H107.429V53.7144H33.5718V33.5715H23.4999V53.7144H0V107.429H141V53.7144H117.5ZM130.929 97.3572H10.0713V63.7857H130.928L130.929 97.3572Z"
              fill="black"
            />
            <path
              d="M23.3701 73.9893V77.1276H27.1556V87.0984H30.7558V77.1276H34.5229V73.9893H23.3701Z"
              fill="black"
            />
            <path
              d="M44.7517 73.9893V78.8265H40.3573V73.9893H36.7568V87.0984H40.3573V81.9654H44.7517V87.0984H48.3522V73.9893H44.7517Z"
              fill="black"
            />
            <path d="M55.1298 73.988H51.5293V87.0977H55.1298V73.988Z" fill="black" />
            <path
              d="M67.8316 81.5219C67.6465 81.0912 67.3824 80.7249 67.0376 80.4233C66.6928 80.1218 66.2776 79.8599 65.7912 79.6385C65.3054 79.4168 64.7607 79.2138 64.1573 79.029C63.7756 78.9062 63.4342 78.8016 63.1323 78.7151C62.8308 78.6292 62.5758 78.54 62.3665 78.4474C62.1566 78.3552 61.9972 78.2533 61.8865 78.1428C61.7757 78.0321 61.7198 77.8906 61.7198 77.7182C61.7198 77.4847 61.8149 77.3183 62.0065 77.2197C62.1965 77.1214 62.4524 77.0721 62.7724 77.0721C63.1665 77.0721 63.5696 77.1368 63.9822 77.2663C64.3942 77.3954 64.767 77.534 65.0989 77.6818C65.493 77.8545 65.8747 78.0511 66.2437 78.2728L67.795 75.3C67.4992 75.1524 67.1668 74.9951 66.7975 74.8293C66.4282 74.6633 66.0311 74.5093 65.6067 74.3678C65.1818 74.2265 64.742 74.1092 64.2859 74.0169C63.831 73.9247 63.3628 73.8784 62.8825 73.8784C62.2301 73.8784 61.6119 73.9737 61.027 74.1648C60.442 74.3559 59.9221 74.6355 59.4671 75.0048C59.0117 75.3741 58.6514 75.8356 58.3865 76.3897C58.1216 76.9435 57.9897 77.5838 57.9897 78.31C57.9897 78.79 58.0538 79.2147 58.183 79.584C58.313 79.9533 58.5126 80.2826 58.7836 80.5715C59.0538 80.8609 59.3986 81.1195 59.8177 81.347C60.236 81.575 60.7342 81.7871 61.3134 81.984C61.7069 82.1195 62.0792 82.2365 62.4301 82.3348C62.7809 82.4334 63.0918 82.532 63.3623 82.6303C63.6333 82.7289 63.8453 82.8424 63.9995 82.9721C64.1529 83.1012 64.2306 83.2585 64.2306 83.4427C64.2311 83.6154 64.154 83.7539 64.0006 83.8583C63.8464 83.9629 63.5727 84.015 63.1791 84.015C62.6617 84.015 62.1541 83.9412 61.656 83.7933C61.1569 83.6457 60.7114 83.4794 60.317 83.2948C59.8486 83.0858 59.4 82.8457 58.9687 82.5747L57.418 85.7321C57.8115 85.9661 58.2395 86.1752 58.701 86.3599C59.1626 86.5447 59.6426 86.7047 60.141 86.84C60.6398 86.9754 61.1413 87.0801 61.6458 87.1539C62.1506 87.2277 62.6432 87.2646 63.123 87.2646C63.7263 87.2646 64.3261 87.1938 64.9235 87.052C65.52 86.9107 66.0559 86.6799 66.5298 86.3594C67.0032 86.0394 67.3849 85.6114 67.6746 85.0763C67.9638 84.541 68.1081 83.8795 68.1081 83.0913C68.1081 82.4758 68.0167 81.9529 67.8316 81.5219Z"
              fill="black"
            />
            <path
              d="M89.7488 73.9893L86.9233 82.981L85.9817 80.2486L88.1421 73.9893H84.8369L83.6736 78.0328L82.5288 73.9893H79.2239L81.3474 80.2486L80.4422 82.981L77.5991 73.9893H73.7031L78.8359 87.0984H81.8271L83.6736 82.4085L85.5383 87.0984H88.5296L93.6632 73.9893H89.7488Z"
              fill="black"
            />
            <path
              d="M101.086 73.9888H97.7987L93.2383 87.0985H96.9125L97.6878 84.5318H101.178L101.972 87.0985H105.627L101.086 73.9888ZM98.2234 82.1315L99.4423 78.0695L100.606 82.1315H98.2234Z"
              fill="black"
            />
            <path
              d="M113.716 73.9893L111.315 79.6573L108.97 73.9893H105.074L109.524 82.7224V87.0984H113.106V82.7596L117.63 73.9893H113.716Z"
              fill="black"
            />
          </svg>

          <ContactFormOverflowContainer />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.description}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg
                  width="50"
                  height="34"
                  viewBox="0 0 50 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_421_34)">
                    <path
                      d="M15.4225 3.80162H30.8498C31.2551 3.80162 31.5836 3.48675 31.5836 3.09832C31.5836 2.70989 31.2551 2.39502 30.8498 2.39502H15.4225C15.0171 2.39502 14.6885 2.70989 14.6885 3.09832C14.6885 3.48675 15.0171 3.80162 15.4225 3.80162Z"
                      fill="black"
                    />
                    <path
                      d="M1.62462 10.6782H17.0518C17.4572 10.6782 17.7858 10.3634 17.7858 9.97493C17.7858 9.5865 17.4572 9.27173 17.0518 9.27173H1.62462C1.21924 9.27173 0.890625 9.5865 0.890625 9.97493C0.890625 10.3634 1.21924 10.6782 1.62462 10.6782Z"
                      fill="black"
                    />
                    <path
                      d="M5.7666 17.9141C5.7666 18.3026 6.09521 18.6175 6.50059 18.6175H21.9278C22.3332 18.6175 22.6618 18.3026 22.6618 17.9141C22.6618 17.5257 22.3332 17.2109 21.9278 17.2109H6.50059C6.09521 17.2109 5.7666 17.5257 5.7666 17.9141Z"
                      fill="black"
                    />
                    <path
                      d="M14.5954 26.0879H0.733993C0.328611 26.0879 0 26.4027 0 26.7911C0 27.1795 0.328611 27.4944 0.733993 27.4944H14.5954C15.0008 27.4944 15.3294 27.1795 15.3294 26.7911C15.3294 26.4027 15.0008 26.0879 14.5954 26.0879Z"
                      fill="black"
                    />
                    <path
                      d="M39.537 8.21118C41.751 8.21118 43.5458 6.49119 43.5458 4.3697C43.5458 2.24822 41.7509 0.52832 39.537 0.52832C37.3225 0.52832 35.5273 2.24831 35.5273 4.3697C35.5272 6.49119 37.3224 8.21118 39.537 8.21118Z"
                      fill="black"
                    />
                    <path
                      d="M46.1312 7.10504C43.8292 10.1947 40.7467 10.5525 37.4296 8.66563C37.2038 8.53737 36.202 8.00849 35.9802 7.88219C30.644 4.84684 25.3141 6.03717 21.7396 10.8335C20.2207 12.8734 23.7337 14.8071 25.2356 12.7908C27.0825 10.3128 29.4308 9.5957 31.9991 10.3806C30.6841 12.5678 29.5343 14.7417 27.912 17.8303C26.2892 20.9189 22.7064 23.3854 19.2638 21.4563C16.7797 20.0651 14.5396 23.4845 17.0162 24.8714C21.7161 27.5034 27.227 25.8872 30.0403 22.4658C30.1378 22.5158 30.241 22.5609 30.3541 22.5988C32.6523 23.3661 35.665 25.4087 36.583 26.1326C37.5006 26.8565 39.0774 30.5444 40.0137 32.3974C41.1496 34.6458 44.8179 33.0082 43.6778 30.7503C42.6165 28.6479 40.8349 24.452 39.4453 23.3904C38.3307 22.539 36.1666 20.9545 34.3312 20.0555C35.5729 17.7509 36.8659 15.4711 38.2269 13.2306C42.5655 14.5044 46.6893 13.004 49.6263 9.06192C51.1465 7.02225 47.6343 5.08864 46.1312 7.10504Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_421_34">
                      <rect width="50" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p className={styles.text}>We will get in contact within 24 Hours</p>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <svg
                  width="50"
                  height="34"
                  viewBox="0 0 50 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_423_9)">
                    <path
                      d="M14.667 1.5H48.2503"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.667 17H48.2503"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.667 32.5H48.2503"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.75 1.5H1.77542"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.75 17H1.77542"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.75 32.5H1.77542"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_423_9">
                      <rect width="50" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p className={styles.text}>We assemble all necessary requirements from you </p>
            </div>

            <div className={styles.additional}>
              <h3>Contact us</h3>
              <Link href="mailto:support@trimsy.org">support@trimsy.org</Link>
            </div>
          </div>
        </div>

        <svg
          className={styles.close}
          onClick={handleOpen}
          onKeyDown={handleKeyDownOverflowChange}
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
      </div>
    </div>
  );
});

export default React.memo(FormOverflow);
