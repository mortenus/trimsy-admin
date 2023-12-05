import React from 'react';

import styles from './ContactForm.module.scss';

import ContactInput from 'components/Form/Input';
import ButtonType from './ButtonType';
import { Button } from 'components';

const ContactForm = (props: any) => {
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
          />
          <ContactInput
            name="email"
            help={!touched?.email ? undefined : errors.email}
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Type your email*'}
          />
          <div className={styles.form_buttons}>
            <ButtonType value={values?.type} name={'type'} handleChange={handleChange} />
          </div>
        </div>
        <Button
          status={status && status}
          size={'medium'}
          disabled={isSubmitting ? 'white' : false}
          type="submit"
          color="white"
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
