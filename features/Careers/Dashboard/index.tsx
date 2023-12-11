import React from 'react';

import styles from './Dashboard.module.scss';
import Item from './Item';
import Headline from '../AdminPanel/Headline';
import { Typography } from 'antd';
import LoadingOverlay from 'features/LoadingOverlay';
import useDashboard from './useDashboard';
import Link from 'next/link';
import NumberCounter from 'features/About/Intro/AnimatedNumber';

type TBannerItems = {
  title: string;
  description: string;
  background: string;
  count: number;
  svg: React.ReactElement<SVGAElement>;
};

const Dashboard = () => {
  const {
    data,
    searchQuery,
    bottomText,
    containerRef,
    handleScroll,
    handleTypeChange,
    handleSearchValueChange,
    handleSearch,
    clearSelection,
    isRefreshingItems,
    refreshItems,
    type,
    dataFetchError,
    isFetching,
    isFetchingQuieries,
  } = useDashboard();

  const bannerItems: TBannerItems[] = [
    {
      title: 'Total',
      description: 'All orders',
      background: '#F7B918',
      count: data.totalOrders,
      svg: (
        <svg
          width="38"
          height="46"
          viewBox="0 0 38 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.2238 2H6.77664C4.07628 2 1.88721 4.18908 1.88721 6.88944V38.6708C1.88721 41.3711 4.07628 43.5602 6.77664 43.5602H31.2238C33.9242 43.5602 36.1133 41.3711 36.1133 38.6708V6.88944C36.1133 4.18908 33.9242 2 31.2238 2Z"
            stroke="white"
            strokeWidth="3"
          />
          <path d="M7 14H31M7 24H31M7 34H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'New',
      description: 'Waiting for an answer',
      background: '#5BCC8C',
      count: data.newStatus,
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M39.1111 0H4.88889C2.2 0 0 2.2 0 4.88889V39.1111C0 40.4077 0.515078 41.6512 1.43192 42.5681C2.34877 43.4849 3.59227 44 4.88889 44H39.1111C41.8 44 44 41.8 44 39.1111V4.88889C44 2.2 41.8 0 39.1111 0ZM39.1111 39.1111H4.88889V31.7778H13.5911C15.2778 34.6867 18.4067 36.6667 22.0244 36.6667C25.6422 36.6667 28.7467 34.6867 30.4578 31.7778H39.1111V39.1111ZM39.1111 26.8889H26.9133C26.9133 29.5778 24.7133 31.7778 22.0244 31.7778C19.3356 31.7778 17.1356 29.5778 17.1356 26.8889H4.88889V4.88889H39.1111V26.8889Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: 'Pending',
      description: 'Orders in progress',
      background: '#EB0038',
      count: data.pendingStatus,
      svg: (
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28.9551 51.9676C35.0345 51.9676 40.8649 49.5526 45.1637 45.2538C49.4625 40.955 51.8775 35.1246 51.8775 29.0451C51.8775 22.9657 49.4625 17.1353 45.1637 12.8365C40.8649 8.53774 35.0345 6.1227 28.9551 6.1227C22.8757 6.1227 17.0452 8.53774 12.7464 12.8365C8.44765 17.1353 6.03261 22.9657 6.03261 29.0451C6.03261 35.1246 8.44765 40.955 12.7464 45.2538C17.0452 49.5526 22.8757 51.9676 28.9551 51.9676ZM28.9551 0.39209C32.7178 0.39209 36.4438 1.13322 39.9201 2.57317C43.3965 4.01313 46.5551 6.12369 49.2158 8.78438C51.8765 11.4451 53.9871 14.6037 55.427 18.0801C56.867 21.5564 57.6081 25.2824 57.6081 29.0451C57.6081 36.6444 54.5893 43.9324 49.2158 49.3059C43.8423 54.6794 36.5543 57.6982 28.9551 57.6982C13.1099 57.6982 0.302002 44.8043 0.302002 29.0451C0.302002 21.4459 3.3208 14.1579 8.69429 8.78438C14.0678 3.41089 21.3558 0.39209 28.9551 0.39209ZM30.3877 14.7186V29.7615L43.2816 37.4118L41.1326 40.9362L26.0898 31.9105V14.7186H30.3877Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.wrapper}>
      <Headline
        title={'Dashboard'}
        description={`Get quick overview of what's happening at Trimsy`}
      />
      <div className={styles.banner}>
        <div className={styles[`banner--wrapper`]}>
          {bannerItems.map((item, key) => (
            <div key={key} className={styles['banner-item']}>
              <div className={styles['banner-item-image']} style={{ background: item.background }}>
                <div
                  className={styles['banner-item-image-background']}
                  style={{ background: item.background }}
                />
                {item.svg}
              </div>
              <div className={styles['banner-item-info']}>
                <h3 className={styles['banner-item-title']}>{item.title}</h3>
                <span className={styles['banner-item-count']}>
                  <NumberCounter endValue={item.count} />
                </span>
                <p className={styles['banner-item-description']}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.orders}>
        <div className={styles.chart}>
          <div className={styles.info}>
            <div className={styles.options}>
              <Typography.Title level={3}>Latest orders</Typography.Title>
            </div>
            {/* <div className={styles.options}>
              <div>
                <Typography.Title level={5}>Name or Email</Typography.Title>
                <Input
                  placeholder="Search by a name or email"
                  value={searchQuery}
                  onChange={handleSearchValueChange}
                  onPressEnter={handleSearch}
                  style={{ width: 250 }}
                  //   allowClear
                />
              </div>
              <div>
                <Typography.Title level={5}>Type</Typography.Title>
                <Select
                  defaultValue={type}
                  value={type}
                  style={{ width: 250 }}
                  onChange={handleTypeChange}
                  options={[
                    {
                      label: 'All',
                      value: 'all',
                    },
                    {
                      label: 'General',
                      options: [
                        { label: 'Resume', value: 'resume' },
                        { label: 'Cover Letter', value: 'cover' },
                        { label: 'Careers', value: 'careers' },
                        { label: 'Career Counseling', value: 'career_counseling' },
                        { label: 'Job Search Strategy', value: 'job_search_strategy' },
                        { label: 'Branding', value: 'branding' },
                      ],
                    },
                    {
                      label: 'Social Media',
                      options: [
                        { label: 'Social Media Management', value: 'social_media_management' },
                        { label: 'Social Media Marketing', value: 'social_media_marketing' },
                        { label: 'LinkedIn Optimization', value: 'linkedin_optimization' },
                      ],
                    },
                  ]}
                />
              </div>
              <div>
                <Button
                  type="link"
                  onClick={clearSelection}
                  style={{ borderBottom: '1px solid #1677ff', borderRadius: '0', padding: '0' }}>
                  Clear
                </Button>
              </div>
            </div> 
            <div className={styles.refresh} onClick={refreshItems}>
              <p className={styles[`refresh--title`]}>refresh</p>

              <svg
                className={clsx(styles[`refresh--icon`], { [styles.rotate]: isRefreshingItems })}
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.4 5.1428H4.0808L4.0816 5.13508C4.18606 4.58704 4.3905 4.06649 4.6832 3.60332C5.11876 2.91571 5.72972 2.37685 6.4432 2.05099C6.6848 1.94127 6.9368 1.85726 7.1936 1.80155C7.72631 1.68583 8.27529 1.68583 8.808 1.80155C9.57358 1.96963 10.2761 2.37535 10.828 2.96816L11.9608 1.75783C11.4503 1.21065 10.8462 0.773838 10.1816 0.471222C9.84265 0.317471 9.49024 0.200316 9.1296 0.121497C8.38547 -0.0404989 7.61853 -0.0404989 6.8744 0.121497C6.51348 0.200643 6.16081 0.318082 5.8216 0.472079C4.82202 0.926467 3.96634 1.68077 3.3576 2.64415C2.94791 3.29375 2.66141 4.02332 2.5144 4.79136C2.492 4.90707 2.48 5.02536 2.464 5.1428H0L3.2 8.57147L6.4 5.1428ZM9.6 6.85713H11.9192L11.9184 6.86399C11.7094 7.96268 11.105 8.92899 10.236 9.55379C9.80385 9.86766 9.31797 10.0867 8.8064 10.1984C8.27396 10.3141 7.72524 10.3141 7.1928 10.1984C6.68131 10.0865 6.19548 9.8674 5.7632 9.55379C5.5509 9.39992 5.35268 9.22485 5.1712 9.03092L4.04 10.243C4.55081 10.79 5.15514 11.2265 5.82 11.5287C6.1592 11.683 6.5136 11.8004 6.872 11.8784C7.61585 12.0405 8.38255 12.0405 9.1264 11.8784C10.5604 11.5595 11.8218 10.6539 12.6424 9.35407C13.0517 8.70495 13.3379 7.97597 13.4848 7.20857C13.5064 7.09285 13.5192 6.97457 13.5352 6.85713H16L12.8 3.42846L9.6 6.85713Z"
                  fill="black"
                />
              </svg>
            </div> */}
            <Link href="/orders" className={styles.refresh}>
              <p className={styles[`refresh--title`]} style={{ marginRight: '10px' }}>
                More
              </p>

              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 7L1 7M15 7L9 13M15 7L9 1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className={styles.grid} ref={containerRef} onScroll={handleScroll}>
            {dataFetchError ? (
              <h5>{dataFetchError}</h5>
            ) : !data.items || data.items.length < 1 || isFetchingQuieries ? (
              <LoadingOverlay />
            ) : (
              <>
                {data.items.map((obj, key) => (
                  <Item key={obj._id} data={obj} />
                ))}
                {isFetching !== null && (
                  <div className={styles['bottom-container']}>
                    <p className={styles[`bottom-text`]}>{bottomText}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
