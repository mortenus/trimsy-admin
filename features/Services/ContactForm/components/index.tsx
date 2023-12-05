import React from 'react';

import styles from './ContactForm.module.scss';

import ContactInput from 'components/Form/Input';
import { Button } from 'components';
import clsx from 'clsx';

type TContactForm = {
  productType?: string;
};

const ContactForm = (props: any & TContactForm) => {
  const {
    values,
    status,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    productType,
  } = props;

  const [activeStage, setActiveStage] = React.useState(0);

  const handleNextStage = () => setActiveStage(activeStage + 1);
  const handlePrevStage = () => {
    if (activeStage === 0) return;
    setActiveStage(activeStage - 1);
  };

  React.useEffect(() => {
    values.productType = productType;
  }, []);

  return (
    <div className={styles.wrapper}>
      {activeStage === 0 ? (
        <div className={'global-wrapper'}>
          <div className={styles.intro}>
            <div className={styles.text}>
              <h4>Tell us more</h4>
              <p>Let us know more about your project</p>
            </div>
            {/* <div onSubmit={handleSubmit} className={styles.form}>
        <ContactInput
          size="small"
          name="fullname"
          help={!touched?.fullname ? undefined : errors.fullname}
          value={values?.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Type your name*'}
        />
        <ContactInput
          size="big"
          name="email"
          help={!touched?.email ? undefined : errors.email}
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Type your email*'}
        />
        <textarea
          value={values?.description}
          name="description"
          id="description"
          onInput={handleChange}
          maxLength={400}
          placeholder={'Describe your objective'}
        />
      </div> */}
            <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              // type="submit"
              style={{ border: `2px solid #000` }}
              color="white"
              size="large"
              onClick={handleNextStage}>
              Next
            </Button>
          </div>
        </div>
      ) : activeStage === 1 ? (
        <div className={'global-wrapper--small'}>
          <div className={styles.more}>
            <h5>Additional information</h5>
            <textarea
              value={values?.description}
              name="description"
              id="description"
              onInput={handleChange}
              maxLength={400}
              placeholder={'Our application should have..'}
            />
            <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              // type="submit"
              style={{ border: `2px solid #000` }}
              color="white"
              size="medium"
              onClick={handleNextStage}>
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className={'global-wrapper--small'}>
          <div onClick={handlePrevStage} className={styles.return}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12"
              style={{ rotate: '90deg' }}>
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>{' '}
            <span>Return</span>
          </div>
          <div onSubmit={handleSubmit} className={styles.form}>
            <ContactInput
              size="small"
              name="fullname"
              help={!touched?.fullname ? undefined : errors.fullname}
              value={values?.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Type your name*'}
            />
            <ContactInput
              size="big"
              name="email"
              help={!touched?.email ? undefined : errors.email}
              value={values?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Type your email*'}
            />
            <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              //   type="submit"
              //   color="black-inverse"
              size="medium"
              onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
