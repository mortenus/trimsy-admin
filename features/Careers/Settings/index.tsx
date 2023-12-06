import React from 'react';

import styles from './Settings.module.scss';
import Item from './Item';
import Headline from '../AdminPanel/Headline';
import useInView from 'hooks/useInView';
import { useOnScroll } from 'hooks/useOnScroll';
import { Button, Input, Select, Typography } from 'antd';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoadingOverlay from 'features/LoadingOverlay';
import useOrders from './useOrders';

const Settings = () => {
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
  } = useOrders();

  const onClickDelete = (obj: any) => {
    console.log('deleting', obj);
  };

  return (
    <section className={styles.wrapper}>
      <Headline title={'Settings'} description={'Currently in development. Use orders tab'} />
      {/* <div className={styles.orders}>
        <div className={styles.chart}>
          <div className={styles.info}>
            <div className={styles.options}>
              <div>
                <Typography.Title level={5}>Name or Email</Typography.Title>
                <Input
                  placeholder="Search by a name or email"
                  value={searchQuery}
                  onChange={handleSearchValueChange}
                  onPressEnter={handleSearch}
                  style={{ width: 250 }}
                  allowClear
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
            </div>
          </div>
          <div className={styles.grid} ref={containerRef} onScroll={handleScroll}>
            {!data || data.length < 1 ? (
              <LoadingOverlay />
            ) : (
              <>
                {data.map((obj, key) => (
                  <Item key={key} onClickDelete={() => onClickDelete(obj)} data={obj} />
                ))}
                <div className={styles['bottom-container']}>
                  <p className={styles[`bottom-text`]}>{bottomText}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Settings;
