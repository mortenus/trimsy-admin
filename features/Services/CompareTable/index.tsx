import React from 'react';

import styles from './CompareTable.module.scss';
import clsx from 'clsx';
import { Button } from 'components';

type TCompareTable = {
  currentActive?: string;
  nameClickable?: boolean;
};

const CompareTable = ({ currentActive, nameClickable = false }: TCompareTable) => {
  return (
    <section className={styles.which}>
      <h2 className={'comparing-table-title'}>Which Web is right for you?</h2>
      <div className={styles[`compare-grid`]}>
        <div className={clsx(styles['item'], styles['overview'])}>
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

          <h3>Starter</h3>
          <div className={styles.cta}>
            <span className={styles.pricing}>From $999</span>
            <Button to="/development/services/starter" size="supersmall">
              Select
            </Button>
            {currentActive === 'Starter' && <div className={styles.current}>Currently viewing</div>}
          </div>
        </div>
        <div className={clsx(styles['item'], styles['page'])}>
          <figure
            style={{
              width: '49px',
              height: '43px',
              backgroundSize: '49px 43px',
              backgroundImage: `url('/static/img/services/page.png')`,
            }}
          />
          <p className={'comparing-table-description'}>1 Page</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '53px',
              height: '42px',
              backgroundSize: '53px 42px',
              backgroundImage: `url('/static/img/services/small-business-seo.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Small Business SEO</h5>
          <p className={'comparing-table-description'}>For website visibility in Search Engines</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '54px',
              height: '32px',
              backgroundSize: '54px 32px',
              backgroundImage: `url('/static/img/services/responsive-design.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Responsive Design</h5>
          <p className={'comparing-table-description'}>
            Adaptivity for different screen sizes and devices
          </p>
        </div>
        <div className={clsx(styles['item'], styles['null'])}>&nbsp;</div>
        <div className={clsx(styles['item'], styles['null'])}>&nbsp;</div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '76px',
              height: '22px',
              backgroundSize: '76px 22px',
              backgroundImage: `url('/static/img/services/deployment.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Deployment</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '67px',
              backgroundSize: '50px 67px',
              backgroundImage: `url('/static/img/services/quality-assurance.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Quality Assurance Testing</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/accessibility.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Accessibility</h5>
          <p className={'comparing-table-description'}>
            Ensuring user friendly experience for each user, including those with diverse needs
          </p>
        </div>
        <div className={clsx(styles['item'], styles['overview'])}>
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

          <h3 className={'headline'}>Basic</h3>
          <div className={styles.cta}>
            <span className={styles.pricing}>From $2500</span>
            <Button to="/development/services/basic" size="supersmall">
              Select
            </Button>
            {currentActive === 'Basic' && <div className={styles.current}>Currently viewing</div>}
          </div>
        </div>
        <div className={clsx(styles['item'], styles['page'])}>
          <figure
            style={{
              width: '49px',
              height: '43px',
              backgroundSize: '49px 43px',
              backgroundImage: `url('/static/img/services/page.png')`,
            }}
          />
          <p className={'comparing-table-description'}>Up to 5 pages</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '53px',
              height: '42px',
              backgroundSize: '53px 42px',
              backgroundImage: `url('/static/img/services/small-business-seo.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Small Business SEO</h5>
          <p className={'comparing-table-description'}>For website visibility in Search Engines</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '54px',
              height: '32px',
              backgroundSize: '54px 32px',
              backgroundImage: `url('/static/img/services/responsive-design.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Responsive Design</h5>
          <p className={'comparing-table-description'}>
            Adaptivity for different screen sizes and devices
          </p>
        </div>
        <div className={clsx(styles['item'], styles['null'])}>&nbsp;</div>
        <div className={clsx(styles['item'], styles['null'])}>&nbsp;</div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '76px',
              height: '22px',
              backgroundSize: '76px 22px',
              backgroundImage: `url('/static/img/services/deployment.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Deployment</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '67px',
              backgroundSize: '50px 67px',
              backgroundImage: `url('/static/img/services/quality-assurance.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Quality Assurance Testing</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/accessibility.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Accessibility</h5>
          <p className={'comparing-table-description'}>
            Ensuring user friendly experience for each user, including those with diverse needs
          </p>
        </div>
        <div className={clsx(styles['item'], styles['overview'])}>
          <svg
            width="146"
            height="106"
            viewBox="0 0 146 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M142.032 54.732H134.76V62.184H130.944V54.732H123.672V51.276H130.944V43.824H134.76V51.276H142.032V54.732Z"
              fill="black"
            />
            <g clipPath="url(#clip0_1761_1989)">
              <path
                d="M67.7637 106H40.2363V77.7227H67.7637V106ZM46.1162 100.111H61.9102V83.6381H46.0898L46.1162 100.111Z"
                fill="black"
              />
              <path
                d="M95.9502 89.474H12.0498C5.40527 89.474 0 84.036 0 77.3514V12.1226C0 5.43794 5.40527 0 12.0498 0H95.9502C102.595 0 108 5.43794 108 12.1226V77.3514C108 84.036 102.595 89.474 95.9502 89.474ZM12.0498 5.88889C8.62207 5.88889 5.85352 8.67417 5.85352 12.1226V77.3514C5.85352 80.7998 8.62207 83.5851 12.0498 83.5851H95.9502C99.3779 83.5851 102.146 80.7998 102.146 77.3514V12.1226C102.146 8.67417 99.3779 5.88889 95.9502 5.88889H12.0498Z"
                fill="black"
              />
              <path
                d="M86.0361 77.6962H21.9639C16.2949 77.6962 11.707 73.0806 11.707 67.3774V22.0967C11.707 16.3934 16.3213 11.7778 21.9639 11.7778H86.0098C91.6787 11.7778 96.2666 16.3934 96.2666 22.0967H90.4395C90.4395 19.6562 88.4619 17.6667 86.0361 17.6667H21.9639C19.5381 17.6667 17.5605 19.6562 17.5605 22.0967V67.3774C17.5605 69.8179 19.5381 71.8074 21.9639 71.8074H86.0098C88.4356 71.8074 90.4131 69.8179 90.4131 67.3774V42.0976H96.2666V67.3774C96.293 73.0806 91.7051 77.6962 86.0361 77.6962Z"
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
              <clipPath id="clip0_1761_1989">
                <rect width="108" height="106" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3 className={'headline'}>Advanced</h3>
          <div className={styles.cta}>
            <span className={styles.pricing}>From $3500</span>

            <Button to="/development/services/advanced" size="supersmall">
              Select
            </Button>
            {currentActive === 'Advanced' && (
              <div className={styles.current}>Currently viewing</div>
            )}
          </div>
        </div>
        <div className={clsx(styles['item'], styles['page'])}>
          <figure
            style={{
              width: '49px',
              height: '43px',
              backgroundSize: '49px 43px',
              backgroundImage: `url('/static/img/services/page.png')`,
            }}
          />
          <p className={'comparing-table-description'}>Up to 10 pages</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '53px',
              height: '42px',
              backgroundSize: '53px 42px',
              backgroundImage: `url('/static/img/services/custom-seo.png')`,
            }}
          />

          <h5 className={'comparing-table-headline'}>Advanced SEO</h5>
          <p className={'comparing-table-description'}>For website visibility in Search Engines</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '54px',
              height: '32px',
              backgroundSize: '54px 32px',
              backgroundImage: `url('/static/img/services/responsive-design.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Responsive Design</h5>
          <p className={'comparing-table-description'}>
            Adaptivity for different screen sizes and devices
          </p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/maintenance.png')`,
            }}
          />

          <h5 className={'comparing-table-headline'}>Maintenance</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/third-party.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Third-Party Integration</h5>
          <p className={'comparing-table-description'}>
            Tools such as shipping carriers or payment gateways
          </p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '76px',
              height: '22px',
              backgroundSize: '76px 22px',
              backgroundImage: `url('/static/img/services/deployment.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Deployment</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '74px',
              height: '67px',
              backgroundSize: '74px 67px',
              backgroundImage: `url('/static/img/services/quality-assurance-premium.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Quality Assurance Testing</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/accessibility.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Accessibility</h5>
          <p className={'comparing-table-description'}>
            Ensuring user friendly experience for each user, including those with diverse needs
          </p>
        </div>
        <div className={clsx(styles['item'], styles['overview'])}>
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

          <h3 className={'headline'}>eCommerce</h3>
          <div className={styles.cta}>
            <span className={styles.pricing}>From $7000</span>
            <Button to="/development/services/ecommerce" size="supersmall">
              Select
            </Button>
            {currentActive === 'eCommerce' && (
              <div className={styles.current}>Currently viewing</div>
            )}
          </div>
        </div>
        <div className={clsx(styles['item'], styles['page'])}>
          <figure
            style={{
              width: '49px',
              height: '43px',
              backgroundSize: '49px 43px',
              backgroundImage: `url('/static/img/services/page.png')`,
            }}
          />
          <p className={'comparing-table-description'}>Up to custom pages</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '53px',
              height: '42px',
              backgroundSize: '53px 42px',
              backgroundImage: `url('/static/img/services/custom-seo.png')`,
            }}
          />

          <h5 className={'comparing-table-headline'}>eCommerce SEO</h5>
          <p className={'comparing-table-description'}>For website visibility in Search Engines</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '54px',
              height: '32px',
              backgroundSize: '54px 32px',
              backgroundImage: `url('/static/img/services/responsive-design.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Responsive Design</h5>
          <p className={'comparing-table-description'}>
            Adaptivity for different screen sizes and devices
          </p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/maintenance.png')`,
            }}
          />

          <h5 className={'comparing-table-headline'}>Maintenance</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/third-party.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Third-Party Integration</h5>
          <p className={'comparing-table-description'}>
            Tools such as shipping carriers or payment gateways
          </p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '76px',
              height: '22px',
              backgroundSize: '76px 22px',
              backgroundImage: `url('/static/img/services/deployment.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Deployment</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '74px',
              height: '67px',
              backgroundSize: '74px 67px',
              backgroundImage: `url('/static/img/services/quality-assurance-premium.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Quality Assurance Testing</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/accessibility.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Accessibility</h5>
          <p className={'comparing-table-description'}>
            Ensuring user friendly experience for each user, including those with diverse needs
          </p>
        </div>
        <div className={clsx(styles['item'], styles['overview'])}>
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

          <h3 className={'headline'}>Custom</h3>
          <div className={styles.cta}>
            <span className={styles.pricing}>From $9999</span>
            <Button to="/development/services/custom" size="supersmall">
              Select
            </Button>
            {currentActive === 'Custom' && <div className={styles.current}>Currently viewing</div>}
          </div>
        </div>
        <div className={clsx(styles['item'], styles['page'])}>
          <figure
            style={{
              width: '49px',
              height: '43px',
              backgroundSize: '49px 43px',
              backgroundImage: `url('/static/img/services/page.png')`,
            }}
          />
          <p className={'comparing-table-description'}>Up to custom pages</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '53px',
              height: '42px',
              backgroundSize: '53px 42px',
              backgroundImage: `url('/static/img/services/custom-seo.png')`,
            }}
          />

          <h5 className={'comparing-table-headline'}>Custom SEO</h5>
          <p className={'comparing-table-description'}>For website visibility in Search Engines</p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '54px',
              height: '32px',
              backgroundSize: '54px 32px',
              backgroundImage: `url('/static/img/services/responsive-design.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Responsive Design</h5>
          <p className={'comparing-table-description'}>
            Adaptivity for different screen sizes and devices
          </p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/maintenance-custom.png')`,
            }}
          />

          <h5 className={'comparing-table-headline'}>Maintenance</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/third-party.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Third-Party Integration</h5>
          <p className={'comparing-table-description'}>
            Tools such as shipping carriers or payment gateways
          </p>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '76px',
              height: '22px',
              backgroundSize: '76px 22px',
              backgroundImage: `url('/static/img/services/deployment.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Deployment</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '74px',
              height: '67px',
              backgroundSize: '74px 67px',
              backgroundImage: `url('/static/img/services/quality-assurance-premium.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Quality Assurance Testing</h5>
        </div>
        <div className={clsx(styles['item'], styles['seo'])}>
          <figure
            style={{
              width: '50px',
              height: '50px',
              backgroundSize: '50px 50px',
              backgroundImage: `url('/static/img/services/accessibility.png')`,
            }}></figure>

          <h5 className={'comparing-table-headline'}>Accessibility</h5>
          <p className={'comparing-table-description'}>
            Ensuring user friendly experience for each user, including those with diverse needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
