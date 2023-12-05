import React from 'react';

import styles from './ContactForm.module.scss';

import ContactInput from 'components/Form/Input';
import { Button } from 'components';

const ContactForm = (props: any) => {
  const { values, status, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } =
    props;

  return (
    <div id="contact" className={styles.wrapper}>
      <div className={styles.intro}>
        <h2>Contact us</h2>
        <p>
          Tell us how we can help you bring your
          <br /> ideas into reality.
        </p>
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
        <textarea
          value={values?.description}
          name="description"
          id="description"
          onInput={handleChange}
          maxLength={400}
          placeholder={'Describe your objective'}
        />
      </div>
      <Button
        status={status && status}
        disabled={isSubmitting ? 'black' : false}
        type="submit"
        color="black-inverse"
        size="medium"
        onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
