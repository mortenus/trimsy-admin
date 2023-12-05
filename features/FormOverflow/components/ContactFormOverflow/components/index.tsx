import React from 'react';

import styles from './ContactFormOverflow.module.scss';

import ContactInput from 'components/Form/Input';
import { Button } from 'components';

const ContactFormOverflow = (props: any) => {
  const { values, status, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } =
    props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div onSubmit={handleSubmit} className={styles.form}>
          <ContactInput
            name="fullname"
            help={!touched?.fullname ? undefined : errors.fullname}
            value={values?.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Type your name*'}
            tabIndex={1}
          />
          <ContactInput
            name="email"
            help={!touched?.email ? undefined : errors.email}
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Type your email*'}
            tabIndex={1}
          />
          <textarea
            value={values?.description}
            name="description"
            id="description"
            onInput={handleChange}
            maxLength={400}
            placeholder={'Describe your objective'}
            tabIndex={1}
          />
        </div>
        <Button
          status={status && status}
          disabled={isSubmitting ? 'black' : false}
          type="submit"
          color="black-inverse"
          onClick={handleSubmit}
          tabIndex={1}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ContactFormOverflow);
